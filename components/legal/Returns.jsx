import React from "react";

const Returns = () => {
  return (
    <div className="p-0">
      <h1 className="font-bold py-2">Returns</h1>
      <p className="py-2 text-md md:text-lg">
        {`We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.`}
      </p>
      <p className="py-2 text-md md:text-lg">
        {`To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.`}
      </p>
      <p className="py-2 text-md md:text-lg">
        {`To start a return, you can contact us at travis@swopme.co. Please note that returns will need to be sent to the following address: [INSERT RETURN ADDRESS]`}
      </p>
      <p className="py-2 text-md md:text-lg">
        {`If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.`}
      </p>
      <p className="py-2 text-md md:text-lg">
        {`You can always contact us for any return question`}
      </p>
      <p className="py-2 text-md md:text-lg">{`at travis@swopme.co.`}</p>
      <h2 className="font-bold py-4">Returns</h2>
      <p className="py-2 text-md md:text-lg">{`Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.`}</p>

      <h2 className="font-bold py-4">Exceptions / non-returnable items</h2>
      <p className="py-2 text-md md:text-lg">{`Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.`}</p>
      <p className="py-2 text-md md:text-lg">{`Unfortunately, we cannot accept returns on sale items or gift cards.`}</p>

      <h2 className="font-bold py-4">Exchanges</h2>
      <p className="py-2 text-md md:text-lg">{`The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.`}</p>

      <h2 className="font-bold py-4">
        European Union 14 day cooling off period
      </h2>
      <p className="py-2 text-md md:text-lg">{`Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.`}</p>

      <h2 className="font-bold py-4">Refunds</h2>
      <p className="py-2 text-md md:text-lg">{`We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.`}</p>
      <p className="py-2 text-md md:text-lg">{`If more than 15 business days have passed since we’ve approved your return, please contact us at travis@swopme.co.`}</p>
    </div>
  );
};

export default Returns;
