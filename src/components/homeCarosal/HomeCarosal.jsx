import React from "react";
import Link from "next/link";
import { Carousel } from "flowbite-react";
const MainCarosal = () => {
  return (
    <div className="h-56 sm:h-64 lg:h-[75vh] xl:h-[75vh] 2xl:h-[75vh]">
      <Carousel slide={false}>
        <div className="flex h-full items-center  bg-[url('/1.jpg')] bg-center bg-cover pl-3 md:px-16">
          <div className="">
            <h4 className=" lg:font-bold font-semibold text-center text-base lg:text-lg text-[#777] capitalize tracking-widest md:tracking-[6.4px] leading-[5px]">
              welcome to fashion
            </h4>
            <h1 className="mt-[10px] uppercase lg:tracking-wider text-[28px] md:text-[36px] lg:text-[50px]  xl:text-[60px] xl:font-bold  font-semibold tracking-widest">
              men fashion
            </h1>
            <div className=" text-center mt-2">
              <Link href="/collections">
                <button
                  className="px-[29px] py-[13px] text-sm font-semibold md:font-bold text-white border-2 border-[#b0574f] transition-all duration-300 bg-[0px] hover:bg-white hover:text-black hover:bg-[100%] uppercase"
                  style={{
                    backgroundSize: "560px",
                    backgroundImage:
                      "linear-gradient(30deg, #b0574f 50%, transparent 50%)",
                  }}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center  bg-[url('/2.jpg')] bg-center bg-cover pl-3 md:px-16">
          <div>
            <h4 className=" lg:font-bold font-semibold text-center text-base lg:text-lg text-[#777] capitalize tracking-widest lg:tracking-[6.4px] leading-[5px]">
              welcome to fashion
            </h4>
            <h1 className="mt-[10px] uppercase text-[28px] md:text-[36px] lg:text-[50px] lg:tracking-wider  xl:text-[60px] xl:font-bold  font-semibold tracking-widest">
              women fashion
            </h1>
            <div className=" text-center">
              <Link href="/collections">
                <button
                  className="px-[29px] py-[13px] text-sm font-semibold md:font-bold text-white border-2 border-[#b0574f] transition-all duration-300 bg-[0px] hover:bg-white hover:text-black hover:bg-[100%] uppercase"
                  style={{
                    backgroundSize: "560px",
                    backgroundImage:
                      "linear-gradient(30deg, #b0574f 50%, transparent 50%)",
                  }}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarosal;
