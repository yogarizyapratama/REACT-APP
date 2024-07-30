import { Spinner } from 'flowbite-react';
import React from 'react';
import { useSelector } from 'react-redux';

const GlobalLoading = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default GlobalLoading;
