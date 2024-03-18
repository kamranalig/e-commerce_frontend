import React from "react";
import Image from "next/image";
const ServicesComponent = () => {
  return (
    <div className="services xl:max-w-[1140px] mx-auto gap-4  flex py-[35px] flex-wrap justify-center items-center overflow-hidden">
      <div className="flex xl:px-3 py-6 justify-center items-center xl:w-[360px] gap-3 border-none md:border-r-[1px] md:border-[#ddd] hover:text-[#B0574F]">
        <Image
          src="/s1.svg"
          alt="service"
          width={60}
          height={60}
          className=" hover:scale-110 transition-all duration-1000 md:w-[45px]"
        />
        <div>
          <h4 className=" text-base font-semibold lg:font-bold uppercase tracking-widest ">
            FREE SHIPPING
          </h4>
          <p className="text-[#777] capitalize text-sm">
            Free Shipping World Wide
          </p>
        </div>
      </div>
      <div className="flex lg:px-3 py-6 items-center  lg:w-[360px] gap-3 border-none md:border-r-[1px] md:border-[#ddd] justify-center hover:text-[#B0574F]">
        <Image
          src="/s2.svg"
          alt="service"
          width={60}
          height={60}
          className=" hover:scale-110 transition-all duration-1000 md:w-[45px]"
        />
        <div>
          <h4 className=" text-base font-semibold lg:font-bold uppercase tracking-widest ">
            24 X 7 SERVICE
          </h4>
          <p className="text-[#777] capitalize text-sm">
            Free Shipping World Wide
          </p>
        </div>
      </div>
      <div className="flex lg:px-3 py-6 items-center lg:w-[360px] gap-3 justify-center hover:text-[#B0574F]">
        <Image
          src="/s3.svg"
          alt="service"
          width={60}
          height={60}
          className=" hover:scale-110 transition-all duration-1000 md:w-[45px]"
        />
        <div>
          <h4 className=" text-base font-semibold lg:font-bold uppercase tracking-widest">
            FESTIVAL OFFER
          </h4>
          <p className="text-[#777] capitalize text-sm">
            Free Shipping World Wide
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
