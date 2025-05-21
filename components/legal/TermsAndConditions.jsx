import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-0">
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">Effective Date</h1>
        <p className="font-normal text-xl">May 21, 2025</p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          1. Platform Overview
        </h1>
        <p className="py-2 text-md md:text-lg">
          Swop provides infrastructure for users to create, share, and transact
          digital and physical goods using blockchain and traditional payment
          methods. Swop does not act as a custodian, financial intermediary, or
          legal representative for any transaction made through the platform.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          2. User Responsibility
        </h1>
        <p className="py-2 text-md md:text-lg">
          You, the user, are fully responsible for: managing your wallet and
          private keys, protecting your passwords and access devices, verifying
          the trustworthiness of counterparties, and reviewing and understanding
          all transaction terms before confirming. Swop does not control or
          reverse any transaction once completed.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          3. Liability Disclaimer
        </h1>
        <p className="py-2 text-md md:text-lg">
          Swop makes no guarantees regarding: the delivery, quality, legality,
          or accuracy of any goods or services listed by users; the availability
          or integrity of third-party payment systems or smart contracts; or the
          actions of buyers, sellers, or other users. Swop is not liable for
          lost funds due to user error, fraud, smart contract failures, or
          third-party integrations.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          4. Escrow and Smart Contracts
        </h1>
        <p className="py-2 text-md md:text-lg">
          Some transactions on Swop may use escrow or smart contract
          functionality. These are automated tools that hold funds until
          predefined conditions are met. However, you understand that these
          systems are decentralized and not controlled by Swop after deployment.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">5. Prohibited Use</h1>
        <p className="py-2 text-md md:text-lg">
          You may not use Swop for: fraudulent, misleading, or illegal activity;
          laundering funds or evading regulatory obligations; or bypassing
          KYC/AML processes when required by law. Swop reserves the right to
          restrict access to users who violate these terms.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          6. No Refund Guarantee
        </h1>
        <p className="py-2 text-md md:text-lg">
          Swop does not offer refunds. All disputes and refund requests must be
          handled directly between buyer and seller, based on their mutually
          agreed terms.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">7. Changes to Terms</h1>
        <p className="py-2 text-md md:text-lg">
          Swop may update these Terms of Service at any time. Continued use of
          the platform constitutes acceptance of any changes.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">8. Contact</h1>
        <p className="py-2 text-md md:text-lg">
          For legal inquiries or dispute support, visit{" "}
          <Link href="https://swopme.co." className="underline px-2">
            https://swopme.co.
          </Link>{" "}
          or email
          <Link href="mailto:support@swopme.co" className="underline px-2">
            support@swopme.co
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
