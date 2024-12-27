import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default Error;