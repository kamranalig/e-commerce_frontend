import React from "react";
import Image from "next/image";
const CompanyCard = () => {
  return (
    <div className="comp max-w-[1140px] flex gap-8 md:gap-24 flex-wrap py-[30px] md:py-[70px] justify-center mx-auto overflow-hidden">
      <Image
        src="/c1.png"
        alt="comp1"
        height={125}
        width={125}
        className=" opacity-50 hover:opacity-100"
      />
      <Image
        src="/c2.png"
        alt="comp2"
        height={125}
        width={125}
        className=" opacity-50 hover:opacity-100"
      />
      <Image
        src="/c3.png"
        alt="comp3"
        height={125}
        width={125}
        className=" opacity-50 hover:opacity-100"
      />
      <Image
        src="/c4.png"
        alt="comp4"
        height={125}
        width={125}
        className=" opacity-50 hover:opacity-100"
      />
      <Image
        src="/c5.png"
        alt="comp5"
        height={125}
        width={125}
        className=" opacity-50 hover:opacity-100"
      />
    </div>
  );
};

export default CompanyCard;
