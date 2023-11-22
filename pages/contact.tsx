// pages/contact-us.tsx

import React from 'react';
import AppLayout from "../components/AppLayout";
import ListerProfile from './lister-profile';
import UserProfile from './user-profile';


const Contact: React.FC = () => {
  return (
    <AppLayout>
      <div className=" container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-500 mb-6">
          Have questions, suggestions, or just want to say hello? Reach out to us!
        </p>
        <form>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter Your Name"
          />
          <div className="mt-4" />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <div className="mt-4" />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Enter Your Message"
          />
          <div className="mt-6" />

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      </AppLayout>

  );
};

export default Contact;

