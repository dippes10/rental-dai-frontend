import React from "react";
import Image from "next/image";

function Newsletter() {
  return (
    <section className="pt-6 my-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:ml-3 mb-12 md:mb-0">
            <h4 className="text-4xl font-bold mb-3">Be the first to see the news</h4>
            <p className="text-gray-700 mb-3">
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </p>
            <div className="flex space-x-1">
              <input
                type="email"
                className="border border-gray-300 rounded p-2 w-8/12"
                placeholder="Email Here..."
              />
              <button className="bg-gradient-to-r from-info to-info text-white py-2 px-4 rounded w-4/12">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:w-1/2 ml-auto">
            <div className="relative">
              {/* Replace 'macbook.png' with the actual path to your image */}
              <Image src="/phone.png" alt="phone" className="w-auto flex-row" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
