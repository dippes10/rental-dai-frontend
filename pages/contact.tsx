import React from "react";
import Image from "next/image";
import AppLayout from "../components/AppLayout";

const ContactUsPage = () => {
  const contactInfo = {
    phone: "(+977) 986 76388495",
    email: "rentaldai2023@gmail.com",
    address: "Thamel, Kathmandu",
  };

  return (
    <AppLayout>
    <section className="bg-contact min-h-screen py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black rounded-xl shadow-xl overflow-hidden">
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center px-6 contact-us-form">
                <div className="text-center">
                  <h3 className="text-white text-3xl font-bold mb-1">
                    Contact Information
                  </h3>
                  <p className="text-white opacity-80 mb-3">
                    Fill up the form and we will contact you in no time!
                  </p>
                  <div className="flex items-center text-white">
                    <i className="fas fa-phone mr-2"></i>
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <i className="fas fa-envelope mr-2"></i>
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-gray-300 border rounded py-2 px-4"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Email"
                className="w-full border-gray-300 border rounded py-2 px-4"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-gray-300 border rounded py-2 px-4"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Message"
                className="w-full border-gray-300 border rounded py-2 px-4"
                rows={6}
              ></textarea>
            </div>
            <button className="bg-red-500 text-white py-2 px-4 rounded w-full">
              Send Message
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4">Our Location</h3>
        <div className="h-64 w-full py-6">

        <iframe
            title="Our Location"
            src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0832516847686!2d85.30643297603619!3d27.714715725165416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc9a83c0cd%3A0xc0495456663927d4!2sNational%20College%20of%20Computer%20Studies!5e0!3m2!1sen!2snp!4v1700922170002!5m2!1sen!2snp"
            width="100%"
            height="120%"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </section>
    </AppLayout>
  );
};

export default ContactUsPage;

//"https://script.google.com/macros/s/AKfycbyYi9hDuFhpTKGqJSuFJv79pHUDQ9p515WU-bQE46BOGTYZzx_MmPyOxDGaQx2H9Emw/exec",