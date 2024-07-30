// ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
    // Anda bisa log error ke layanan pelaporan error seperti Sentry di sini
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    // Arahkan ke halaman home
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-indigo-600 mb-2">Oopss!!!</h1>
              <p className="text-gray-700">Ada kesalahan dengan sistem kamiii</p>
              <p className="text-red-500 mt-2">{this.state.error && this.state.error.toString()}</p>
            </div>
            <button
              onClick={this.handleReset}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 mb-4"
            >
              Kembali ke Dashboard
            </button>
            <button
              onClick={() => window.location.href = 'mailto:support@example.com?subject=Error Report'}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
