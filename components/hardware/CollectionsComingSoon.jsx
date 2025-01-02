"use client";
import React from "react";
import CategoriesComingSoon from "./CategoriesComingSoon";
import { usePathname } from "next/navigation";

const CollectionsComingSoon = () => {
  const path = usePathname();

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
      {/* {path!=="/"&&<CategoriesComingSoon */}
      {/*   title={"Store"} */}
      {/*   titleImage={"/assets/hardware/collection/PhoneAttachments/iphones.png"} */}
      {/* />} */}
      {/* {path!=="/"&&<CategoriesComingSoon */}
      {/*   title={"Store"} */}
      {/*   titleImage={ */}
      {/*     "/assets/hardware/collection/hospitality/HospitalityCards.png" */}
      {/*   } */}
      {/* />} */}
      {/* {path!=="/"&&<CategoriesComingSoon */}
      {/*   title={"Store"} */}
      {/*   titleImage={"/assets/hardware/collection/pets/pets.png"} */}
      {/* />} */}
      {/* {path!=="/"&&<CategoriesComingSoon */}
      {/*   title={"Store"} */}
      {/*   titleImage={"/assets/hardware/collection/wearables/wearable.png"} */}
      {/* />} */}
      {/* {path!=="/"&&<CategoriesComingSoon */}
      {/*   title={"Store"} */}
      {/*   titleImage={"/assets/hardware/collection/stickers/sticker.png"} */}
      {/* />} */}
    </div>
  );
};

export default CollectionsComingSoon;
