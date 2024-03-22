"use client";
import React from "react";
import Link from "next/link";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("userdata", userData);
  };
  return (
    <>
      <div className="py-[70px]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex gap-5">
            <div className=" w-2/4">
              <h3 className=" uppercase mb-5 text-[#222] font-bold tracking-wide text-2xl">
                Login
              </h3>
              <div className="p-[30px] border-[1px] border-solid border-[#ddd] h-[320px]">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className=" capitalize text-[#333] text-sm font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      className=" text-xs py-[17px] px-[25px] mb-[30px] border-[#ddd]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className=" capitalize text-[#333] text-sm font-semibold mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder="Enter Your Password"
                      className=" text-xs py-[17px] px-[25px] mb-[30px] border-[#ddd]"
                    />
                  </div>
                  <button
                    className="px-[29px] py-[13px] text-sm font-bold text-white border-2 border-[#b0574f] transition-all duration-300 bg-[0px] hover:bg-white hover:text-black hover:bg-[100%] uppercase "
                    style={{
                      backgroundSize: "560px",
                      backgroundImage:
                        "linear-gradient(30deg, #b0574f 50%, transparent 50%)",
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className=" w-2/4">
              <h3 className=" uppercase mb-5 text-[#222] font-bold tracking-wide text-2xl">
                New Customer
              </h3>
              <div className="p-[30px] border-[1px] border-solid border-[#ddd] h-[320px]">
                <h6 className=" uppercase text-[#333] font-semibold mb-5 text-sm">
                  Create a Account
                </h6>
                <p className="text-sm text-[#555] mb-4">
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <Link href="/register">
                  <button
                    className="px-[29px] py-[13px] text-sm font-bold text-white border-2 border-[#b0574f] transition-all duration-300 bg-[0px] hover:bg-white hover:text-black hover:bg-[100%] uppercase mt-4"
                    style={{
                      backgroundSize: "560px",
                      backgroundImage:
                        "linear-gradient(30deg, #b0574f 50%, transparent 50%)",
                    }}
                  >
                    Create an Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
