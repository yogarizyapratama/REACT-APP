// src/utils/apiClient.js
import { jwtDecode } from "jwt-decode";
import store from "../redux/store";
import { setTokenExpired, setApiError, logout, setUser } from "../redux/slices/auth";
import { setLoading, clearLoading } from '../redux/slices/loading';
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:7100/api/v1"; // Ganti dengan URL API Anda

// Helper function to handle token expiry
const handleTokenExpiry = () => {
  store.dispatch(setTokenExpired());
  store.dispatch(logout());
  toast.error('Session expired. Please log in again.', {
    toastId: "unique-id",
  });
  window.location.href = "/login";
};

// Helper function to handle API requests
const apiRequest = async (url, method = "GET", data = null) => {
  const state = store.getState();
  const token = state.auth.token;
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      handleTokenExpiry();
      return;
    } else {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const options = {
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  store.dispatch(setLoading());

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, options);

    if (response.ok) {
      return await response.json();
    } else if (response.status === 403) {
      handleTokenExpiry()
    } else {
      const error = await response.text();
      store.dispatch(setTokenExpired());
      store.dispatch(logout());
      store.dispatch(setApiError(error));
      toast.error("Response error: " + JSON.parse(error).message, {
        toastId: "unique-id",
      });
      throw new Error(error);
    }
  } catch (error) {
    store.dispatch(setApiError(error.message));
    toast.error("Request error: " + JSON.parse(error).message, {
      toastId: "unique-id",
    });
    throw error;
  } finally {
    store.dispatch(clearLoading());
  }
};

export const get = (url) => apiRequest(url, "GET");
export const post = (url, data) => apiRequest(url, "POST", data);
export const put = (url, data) => apiRequest(url, "PUT", data);
export const del = (url) => apiRequest(url, "DELETE");
