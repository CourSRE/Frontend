import { register } from 'module';
import React from 'react';

const Register = () => {
  return (
    <div className="flex">
      <section className="w-1/2">
        {/* Left section with placeholder image */}
        <img src="https://placekitten.com/800/600" alt="Cat Placeholder" className="w-full h-full object-cover" />
      </section>
      <section className="w-1/2 p-8">
        {/* Right section with form */}
        <h1 className="text-4xl font-bold mb-4">Create your account</h1>
        <h2 className="text-lg mb-6">
          Already have an account? <a href="#">Sign in</a>
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full name
            </label>
            <input type="text" id="fullName" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input type="text" id="username" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input type="email" id="email" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
              Date of birth
            </label>
            <input type="date" id="dob" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Gender</label>
            <div>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="gender" value="male" />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="form-radio" name="gender" value="female" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="referralCode" className="block text-sm font-medium text-gray-600">
              Referral code
            </label>
            <input type="text" id="referralCode" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">I agree with TOS</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create account
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
