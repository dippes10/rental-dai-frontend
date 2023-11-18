import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ListerForm: React.FC = () => {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container flex flex-col items-center">
        <div className="mb-8 text-center">
          <h3 className="text-4xl font-bold text-blue-800">List your Property Details</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white rounded-md shadow-lg overflow-hidden">
          <form className="w-full mx-auto p-6" method="post" autoComplete="off">
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Elegant Studio"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="123 Maple Avenue, Townsville"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <div className="relative">
                  <input
                    type="text"
                    name="imageUrl"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="https://source.unsplash.com/800x600/?apartment"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Details</label>
                <div className="relative">
                  <textarea
                    name="details"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="This elegant studio offers a comfortable living space with modern amenities."
                    rows={6}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <button
                type="button"
                className={`flex items-center space-x-2 focus:outline-none ${
                  checked ? 'text-green-500' : 'text-red-500'
                }`}
                onClick={handleChecked}
              >
                <FontAwesomeIcon
                  icon={checked ? faCheckCircle : faExclamationCircle}
                  className="h-6 w-6"
                />
                <span className="text-sm font-medium">
                  {checked ? 'Agreed to Terms' : 'Not Agreed'}
                </span>
              </button>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ListerForm;
