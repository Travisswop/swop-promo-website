import React from "react";

const RefundPolicy = () => {
  return (
    <div className="p-0">
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">Effective Date</h1>
        <p className="font-normal text-xl">May 21, 2025</p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          1. Buyer-Seller Responsibility
        </h1>
        <p className="py-2 text-md md:text-lg">
          All purchases made through Swop are governed by the terms agreed upon
          between the buyer and seller. This includes, but is not limited to:
          refund and return conditions, shipping timelines, and product
          authenticity or delivery guarantees. Buyers and sellers are encouraged
          to clearly define and communicate these terms before completing any
          transaction.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          2. Swop's Role in Dispute Resolution
        </h1>
        <p className="py-2 text-md md:text-lg">
          Swop does not issue refunds on behalf of either party. However, Swop
          will enforce the agreed-upon terms between both parties in the event
          of a dispute, provided there is sufficient evidence. This may include:
          proof of non-delivery, breach of agreed refund or return terms, or
          violations of product/service descriptions. Swop reserves the right to
          freeze or release funds held in escrow only to enforce the agreed
          transaction terms.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          3. Escrow-Based Protection
        </h1>
        <p className="py-2 text-md md:text-lg">
          For eligible transactions, Swop offers an escrow payment system, which
          holds funds until the buyer confirms the goods or services were
          received as expected. This ensures a safer environment for high-trust
          and high-value transactions.
        </p>
      </div>
      <div className="py-2 ">
        <h1 className="font-bold  text-2xl lg:text-2xl">
          4. No Central Refund Authority
        </h1>
        <p className="py-2 text-md md:text-lg">
          By using Swop, you acknowledge and agree that Swop is not responsible
          for issuing refunds directly and that responsibility lies with the
          original seller. Always review the seller's individual refund policy
          before making a purchase.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
