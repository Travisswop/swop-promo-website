import React from "react";
import CategoriesComingSoon from "./CategoriesComingSoon";

const CollectionsComingSoon = () => {
  return (
    // <div className="">
    //   <CategoriesComingSoonComingSoon
    //     title={"Store"}
    //     titleImage={"/assets/home/coming-soon/swop-bc-1.png"}
    //   />
    // </div>
    <div className="">
      <CategoriesComingSoon
        // title={"Business Card"}
        // titleImage={"/assets/hardware/collection/card/businessCard.png"}
        title={"Store"}
        titleImage={"/assets/home/coming-soon/swop-bc-1.png"}
      />
      <CategoriesComingSoon
        title={"Store"}
        titleImage={"/assets/hardware/collection/PhoneAttachments/iphones.png"}
      />
      <CategoriesComingSoon
        title={"Store"}
        titleImage={
          "/assets/hardware/collection/hospitality/HospitalityCards.png"
        }
      />
      <CategoriesComingSoon
        title={"Store"}
        titleImage={"/assets/hardware/collection/pets/pets.png"}
      />
      <CategoriesComingSoon
        title={"Store"}
        titleImage={"/assets/hardware/collection/wearables/wearable.png"}
      />
      <CategoriesComingSoon
        title={"Store"}
        titleImage={"/assets/hardware/collection/stickers/sticker.png"}
      />
    </div>
  );
};

export default CollectionsComingSoon;
