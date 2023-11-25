import React from "react";
import AppLayout from "../../components/AppLayout";

const RentalDaiPrivacyPolicy: React.FC = () => {
  return (
    <AppLayout>
    <div className="flex flex-col justify-center items-center min-h-full bg-gray-200 py-4">
      <div className="w-11/12 max-w-3xl p-8 rounded-lg shadow-lg bg-white text-justify">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At RentalDai, we are dedicated to safeguarding your privacy and ensuring the security of your personal information.
        </p>
        <p className="mb-4">
          <strong>Data Collection:</strong> We collect certain information when you visit our website, including your IP address, browser type, device information, and the pages you viewed. This data is used to enhance the user experience, analyze site traffic, and improve our services.
        </p>
        <p className="mb-4">
          <strong>Personal Information:</strong> When you register for our newsletter or events, we may collect your name, email address, and other relevant details. This information is used exclusively to send you updates about our platform, upcoming events, and related matters. We will never sell or share your personal details with third parties without your explicit consent.
        </p>
        <p className="mb-4">
          <strong>Security Measures:</strong> We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. Your data is stored securely, and access is restricted to authorized personnel only.
        </p>
        <p className="mb-4">
          <strong>Third-Party Links:</strong> Our website may contain links to third-party websites. Please note that we have no control over the content, privacy policies, or practices of these third-party sites. We recommend reviewing their privacy policies before providing any personal information.
        </p>
        <p className="mb-4">
          <strong>Your Rights:</strong> You have the right to access, update, or delete the personal information we hold about you. 
        </p>
        <p className="mb-4">
          <strong>Changes to Policy:</strong> RentalDai reserves the right to modify this Privacy Policy at any time. Updates will be posted on our website, and your continued use of our services constitutes acceptance of the updated policy.
        </p>
      </div>
    </div>
    </AppLayout>
  );
};

export default RentalDaiPrivacyPolicy;
