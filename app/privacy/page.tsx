import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Privacy Policy
        </h1>
        <p className="mb-4 sm:mb-6">
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          1. Introduction
        </h2>
        <p className="mb-4 sm:mb-6">
          This Privacy Policy outlines the practices of [Your Company Name]
          ("we," "us," "our") regarding the collection, use, and disclosure of
          personal information when you visit our website [insert website URL]
          or use our services. We are committed to protecting your privacy and
          handling your personal information in accordance with applicable data
          protection laws.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          2. Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Information that identifies
            you as an individual, including but not limited to your name, email
            address, phone number, and mailing address.
          </li>
          <li>
            <strong>Property Information:</strong> Details regarding properties
            you wish to buy or sell.
          </li>
          <li>
            <strong>Usage Data:</strong> Automatically collected data about your
            interaction with our website.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          3. Legal Basis for Processing Personal Information
        </h2>
        <p className="mb-4">
          We process your personal information based on the following legal
          grounds:
        </p>
        <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-2">
          <li>
            <strong>Consent:</strong> You have given us explicit consent.
          </li>
          <li>
            <strong>Contractual Necessity:</strong> Processing is necessary for
            the performance of a contract.
          </li>
          <li>
            <strong>Legal Obligation:</strong> Required to comply with legal
            obligations.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Processing for our legitimate
            interests.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          4. Use of Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-2">
          <li>To provide, maintain, and improve our services.</li>
          <li>To communicate regarding your inquiries and transactions.</li>
          <li>To send promotional materials and updates.</li>
          <li>To analyze website usage and improve user experience.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          5. Disclosure of Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-2">
          <li>
            <strong>Service Providers:</strong> With third parties that provide
            services on our behalf.
          </li>
          <li>
            <strong>Legal Compliance:</strong> When required by law.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with any merger
            or acquisition.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          6. Data Security
        </h2>
        <p className="mb-4 sm:mb-6">
          We implement reasonable security measures to protect your personal
          information. However, we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          7. Your Rights
        </h2>
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-2">
          <li>
            The right to access and obtain a copy of your personal information.
          </li>
          <li>The right to request correction of inaccurate information.</li>
          <li>The right to request deletion of your personal information.</li>
          <li>The right to object to or restrict processing.</li>
          <li>The right to withdraw consent at any time.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          8. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4 sm:mb-6">
          Our website uses cookies and similar tracking technologies. You can
          manage cookie preferences through your browser settings.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mb-4 sm:mb-6">
          We may update this Privacy Policy from time to time. Significant
          changes will be posted on this page.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 sm:mt-8 sm:mb-4">
          10. Contact Us
        </h2>
        <p className="mb-2">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at:
        </p>
        <p className="mb-4 sm:mb-6">
          [Your Company Name]
          <br />
          [Address]
          <br />
          [Email Address]
          <br />
          [Phone Number]
        </p>
      </div>
    </div>
  );
}
