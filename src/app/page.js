import MainCarosal from "@/components/homeCarosal/HomeCarosal";
import HomeCardsComponent from "@/components/sectionCard/HomeProductSec";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <MainCarosal />
      <div className="md:max-w-[1140px] mx-auto flex md:px-8 gap-5 py-[30px] md:py-[50px] lg:py-[70px] flex-col md:flex-row">
        <div className="card relative lg:h-[251px] px-3 md:p-0  md:w-[546px] cursor-pointer overflow-hidden">
          <Link href="/collections">
            <Image
              src="/3.jpg"
              alt="seal image"
              height={251}
              width={546}
              className=" hover:scale-110 transition-all duration-1000"
            />
          </Link>
          <div className="  absolute top-20 md:top-14 flex items-center right-20 md:right-16 ">
            <div>
              <h4 className="uppercase text-[#632721] font-semibold lg:font-bold lg:text-lg text-center">
                10% off
              </h4>
              <h2 className="uppercase text-[26px] font-semibold lg:text-[50px] text-[#333333] leading-[30px] lg:font-bold tracking-[0.16px]">
                Men
              </h2>
            </div>
          </div>
        </div>
        <div className="card relative lg:h-[251px] px-3 md:p-0  md:w-[546px] cursor-pointer overflow-hidden">
          <Link href="/collections">
            <Image
              src="/4.jpg"
              alt="seal image"
              height={251}
              width={546}
              className=" hover:scale-110 transition-all duration-1000"
            />
          </Link>
          <div className=" absolute top-20 md:top-14 flex items-center right-20 md:right-16 ">
            <div>
              <h4 className="uppercase text-[#632721] font-semibold lg:font-bold lg:text-lg text-center">
                10% off
              </h4>
              <h2 className="uppercase text-[26px] font-semibold lg:text-[50px] text-[#333333] leading-[30px] lg:font-bold tracking-[0.16px]">
                women
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/bg1.jpg')] bg-fixed w-screen bg-cover bg-no-repeat py-[30px] md:py-[190px] md:bg-[50%] bg-center overflow-hidden ">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center w-screen md:w-[500px] lg:w-[600px] bg-[#FFFFFF33] md:bg-transparent p-[25px]">
            <h2 className="text-[60px] lg:text-[90px] font-semibold lg:font-bold text-[#b0574f] uppercase tracking-wide">
              2023
            </h2>
            <h3 className=" text-[40px] lg:text-[55px] text-[#333] uppercase font-semibold lg:font-bold tracking-wide text-center">
              FASHION TRENDS
            </h3>
            <h4 className=" text-lg lg:text-2xl pt-2 text-[#777] font-semibold uppercase tracking-[8px]">
              SPECIAL OFFER
            </h4>
          </div>
        </div>
      </div>
      <div className="products overflow-hidden">
        <div className=" max-w-[1140px] mx-auto py-[30px] md:py-[70px]">
          <h4 className="text-center pb-2 md:text-lg font-normal text-[#B0574F]">
            Exclusive Products
          </h4>
          <h2 className="relative text-center text-2xl md:text-[32px] font-bold pb-2 after:absolute after:w-[70px] after:bg-[#B0574F] after:'' after:left-0 after:right-0 after:h-[2px] after:mx-auto after:bottom-0 mb-7">
            SPECIAL PRODUCTS
          </h2>
          <HomeCardsComponent />
        </div>
      </div>
      <hr className="max-w-[1140px] mx-auto" />
    </>
  );
}
