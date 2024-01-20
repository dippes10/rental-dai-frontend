/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AppLayout from "../../components/AppLayout";
import App from "next/app";

const HomeRentalTermsAndConditions: React.FC = () => {
  return (
    <AppLayout>
    <div className="flex flex-col justify-center items-center min-h-full bg-gray-200 py-4">
      <div className="w-11/12 max-w-3xl p-8 rounded-lg shadow-lg bg-white text-justify">
        <h1 className="text-3xl font-bold mb-6">HomeRental Terms and Conditions</h1>
        <p className="mb-4">
          By accessing or using the HomeRental website, including creating an account, you agree to abide by these terms and conditions ("Terms of Use"). If you do not agree with these Terms of Use, please refrain from using the site.
        </p>
        <p className="mb-4">
          HomeRental reserves the right to make changes to these Terms of Use at any time, without prior notice. Your continued use of the site after such modifications constitutes your acceptance of the modified Terms of Use.
        </p>
        <p className="mb-4">
          The content provided on the site, including text, graphics, images, and other material ("Content"), is for informational purposes only. The Content does not serve as a substitute for professional advice or services related to housing or renting.
        </p>
        <p className="mb-4">
          HomeRental does not endorse or guarantee the accuracy or completeness of any Content and is not responsible for any errors or omissions in the Content. Your reliance on any Content is at your own risk.
        </p>
        <p className="mb-4">
          The site may contain links to third-party websites that HomeRental does not own or control. HomeRental has no control over the content, privacy policies, or practices of any third-party websites. HomeRental will not censor or edit the content of any third-party site.
        </p>
        <p className="mb-4">
          By using the site, you agree to indemnify, defend, and hold harmless HomeRental and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that may arise from your use of the site, your violation of these Terms of Use, or your violation of any rights of another related to housing or renting.
        </p>
        <p className="mb-4">
          These Terms of Use constitute the entire agreement between you and HomeRental concerning the use of the site for housing and room renting services, and supersede all prior communications, whether oral or written, between you and HomeRental.
        </p>
        <p className="mb-4">
          If any provision of these Terms of Use is found to be invalid or unenforceable under applicable law, that provision will be deleted or modified to comply with the law, and the remaining provisions will continue in full force and effect.
        </p>
        <p className="mb-4">
          These Terms of Use are governed by and construed in accordance with the laws of Nepal, without regard to any principles of conflicts of law.
        </p>
      </div>
    </div>
    </AppLayout>
  );
};

export default HomeRentalTermsAndConditions;
