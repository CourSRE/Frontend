// pages/Login.tsx
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="w-1/2">
        {/* Left section with cat images */}
        {/* You can replace these images with actual cat images */}
        <img src="https://placekitten.com/400/300" alt="Cat 1" className="w-full h-1/2 object-cover" />
        <img src="https://placekitten.com/400/300" alt="Cat 2" className="w-full h-1/2 object-cover mt-2" />
      </section>
      <section className="w-1/2 p-8">
        {/* Right section with login form */}
        <h1 className="text-4xl font-bold mb-4">Sign in to your account</h1>
        <h2 className="text-lg mb-6">
          Don't have an account? <a href="#">Create an account</a>
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input type="email" id="email" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input type="password" id="password" className="mt-1 p-2 border rounded w-full" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600">
              <button
                type="button"
                className="focus:outline-none focus:ring focus:border-blue-300"
              >
                Show
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign in
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;

