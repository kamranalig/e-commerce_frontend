const FooterComponent = () => {
  return (
    <>
      <div className=" bg-[#F9F9F9] overflow-hidden">
        <div className="max-w-[1140px] mx-auto">
          <div className="py-[35px] flex flex-col md:flex-row gap-3 justify-between px-4">
            <div>
              <h4 className=" mb-2 text-[#222] uppercase font-bold text-lg tracking-wide">
                KNOW IT ALL FIRST!
              </h4>
              <p className=" text-sm text-[#777]">
                Never Miss Anything From Multikart By Signing Up To Our
                Newsletter.
              </p>
            </div>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className=" w-[215px] p-[13px] border-[1px] border-[#eee] text-[16px] mr-4"
                />
                <button
                  className="px-[29px] py-3 text-white border-2 uppercase border-[#b0574f] transition-all duration-300 bg-[0px] hover:bg-white hover:text-black hover:bg-[100%]"
                  style={{
                    backgroundSize: "560px",
                    backgroundImage:
                      "linear-gradient(30deg, #b0574f 50%, transparent 50%)",
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <hr />
          <div className="py-[70px] flex flex-col gap-4 md:gap-0 md:justify-between md:flex-row">
            <div className="md:w-[356px] px-5 ms:px-0">
              <h2 className="text-[36px] font-bold text-center md:text-left">
                E-Comerece
              </h2>
              <p className=" text-sm leading-8 mt-2 text-[#777]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <div>
              <ul className="flex flex-col gap-4 px-5 md:px-0">
                <h4 className=" text-[16px] mb-[20px] uppercase font-bold text-[#222]">
                  MY ACCOUNT
                </h4>
                <div className="flex gap-4 md:flex-col">
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Womens
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Clothing
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Accessories
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Featured
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                </div>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4 px-5 md:px-0">
                <h4 className=" text-[16px] mb-[20px] uppercase font-bold text-[#222]">
                  WHY WE CHOOSE
                </h4>
                <div className="flex gap-4 md:flex-col">
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Shipping & Return
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Secure Shopping
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Gallary
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Affiliates
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                  <li className="text-sm text-[#777] cursor-pointer relative group">
                    <span className="relative">
                      Contacts
                      <span className="absolute inset-x-0 top-5 w-0 h-[2px] bg-[#b0574f] transition-all duration-500 group-hover:w-[100%]"></span>
                    </span>
                  </li>
                </div>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4 md:w-[198px] text-sm text-[#777] px-5 md:px-0">
                <h4 className=" text-[16px] mb-[20px] uppercase font-bold text-[#222]">
                  STORE INFORMATION
                </h4>
                <li>Multikart Demo Store, Demo Store India 345-659</li>
                <li>Call Us: 123-456-7898</li>
                <li>Email Us: Support@Fiot.Com</li>
                <li>Fax: 123456</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto py-5">
        <p className="text-sm text-[#777]">
          &copy; 2024-25 E-Commerece powered by Scripthub
        </p>
      </div>
    </>
  );
};

export default FooterComponent;
