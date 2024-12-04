import React from "react";
import Categories from "./Categories";
import { hardwareCollections } from "@/config/hardwareCollectons";
const HardwareCollections = () => {
  return (
    <div className="">
      <Categories
        title={"Business Card"}
        titleImage={"/assets/hardware/collection/card/MetalGoldcards.svg"}
        products={hardwareCollections.BusinessCards}
      />
      <Categories
        title={"Phone Attachments"}
        titleImage={"/assets/hardware/collection/phoneAttachments/iphones.svg"}
        products={hardwareCollections.PhoneAttachments}
      />
      <Categories
        title={"Hospitality"}
        titleImage={"/assets/hardware/collection/card/MetalGoldcards.svg"}
        products={hardwareCollections.BusinessCards}
      />
      <Categories
        title={"Pets"}
        titleImage={"/assets/hardware/collection/card/MetalGoldcards.svg"}
        products={hardwareCollections.BusinessCards}
      />
      <Categories
        title={"Wearables"}
        titleImage={"/assets/hardware/collection/card/MetalGoldcards.svg"}
        products={hardwareCollections.BusinessCards}
      />
      <Categories
        title={"Stickers"}
        titleImage={"/assets/hardware/collection/card/MetalGoldcards.svg"}
        products={hardwareCollections.BusinessCards}
      />
    </div>
  );
};

export default HardwareCollections;
