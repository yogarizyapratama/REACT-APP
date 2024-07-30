// src/components/ErrorPopup.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const ErrorPopUp = () => {
  const apiError = useSelector((state) => state.auth.apiError);
  const apiErrorMessage = useSelector((state) => state.auth.apiErrorMessage);

  if (!apiError) return null;

  return (
    <div className="fixed top-0 left-0 right-0 p-4 bg-red-600 text-white text-center">
      {apiErrorMessage}
    </div>
  );
};

export default ErrorPopUp;
