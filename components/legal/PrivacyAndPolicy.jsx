import Link from "next/link";
import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="p-0">
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">Effective Date</h1>
        <p className="font-normal text-xl">May 21, 2025</p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">1. Overview</h1>
        <p className="py-2 text-md md:text-lg">
          Swop does not sell or monetize user data for profit. Instead, data
          shared within the Swop ecosystem is used solely to improve products,
          foster community growth, and contribute to the public good of the Swop
          network.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          2. What Data We Collect
        </h1>
        <p className="py-2 text-md md:text-lg">
          Swop may collect: public blockchain activity (wallet addresses,
          transactions, NFTs, etc.); interaction data (likes, follows, posts,
          views, clicks, redemptions); metadata shared through Swop services
          (device/browser info, IPs, referral sources); and optional profile
          information you provide (email, name, avatar, etc.). No biometric,
          financial account credentials, or invasive tracking is collected.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">3. How Data Is Used</h1>
        <p className="py-2 text-md md:text-lg">
          All data is used to enhance platform features and performance, deliver
          personalized user experiences, identify and reward meaningful
          contributions, support decentralized governance and community
          insights, and improve fraud prevention and security systems. Swop may
          publish anonymized, aggregated data to promote transparency and
          ecosystem growth.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          4. Data Ownership and Sovereignty
        </h1>
        <p className="py-2 text-md md:text-lg">
          You own your data. Swop believes in data portability and user
          sovereignty. You may export, delete, or control the use of your data
          at any time. Swop will not restrict access to the platform based on
          data preferences.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          5. Sharing with the Ecosystem
        </h1>
        <p className="py-2 text-md md:text-lg">
          Swop may share de-identified data with verified contributors for
          ecosystem development, governance processes to shape platform
          direction, and analytics tools operated by Swop or its community. All
          sharing is done in alignment with Swop's goal to support public
          benefit, not private profit.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          6. No Third-Party Ads or Sales
        </h1>
        <p className="py-2 text-md md:text-lg">
          Swop does not sell your data to advertisers or brokers. No third-party
          advertising networks are integrated into Swop products.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          7. Updates to Policy
        </h1>
        <p className="py-2 text-md md:text-lg">
          We may update this policy to reflect evolving community norms or legal
          obligations. Material changes will be posted at
          <Link href="https://swopme.co." className="hover:underline ps-3">
            https://swopme.co.
          </Link>
        </p>
      </div>

      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">8. Contact</h1>
        <p className="py-2 text-md md:text-lg">
          For data questions or requests, contact:
          <Link href="mailto:support@swopme.co" className="underline ps-3">
            support@swopme.co
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
