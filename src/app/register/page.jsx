"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/authSlice/AuthSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, error, jwt } = useSelector((state) => state.auth);

  useEffect(() => {
    if (jwt) {
      toast.success("User successfully registered"); // Show success toast
      router.push("/login");
    }
  }, [jwt, router]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    await dispatch(registerUser(userData));
  };

  useEffect(() => {
    if (error) {
      toast.error("User already exists"); // Show error toast
    }
  }, [error]);

  // console.log("kkkkkkkkkkkkkkk", auth);
  return (
    <div className="py-[70px] ">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex gap-5">
          <div className="w-[100%]">
            <h3 className=" uppercase mb-5 text-[#222] font-bold tracking-wide text-2xl">
              Create Account
            </h3>
            <div className="p-[30px] border-[1px] border-solid border-[#ddd] h-[320px]">
              <form onSubmit={handleSubmit}>
                <div className="flex gap-5">
                  <div className="flex flex-col w-2/4">
                    <label
                      htmlFor="firstName"
                      className=" capitalize text-[#333] text-sm font-semibold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className=" text-xs py-[17px] px-[25px] mb-[30px] border-[#ddd]"
                      name="firstName"
                    />
                  </div>
                  <div className="flex flex-col w-2/4">
                    <label
                      htmlFor="lastName"
                      className=" capitalize text-[#333] text-sm font-semibold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className=" text-xs py-[17px] px-[25px] mb-[30px] border-[#ddd]"
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col w-2/4">
                    <label
                      htmlFor="email"
                      className=" capitalize text-[#333] text-sm font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className=" text-xs py-[17px] px-[25px] mb-[30px] border-[#ddd]"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col w-2/4">
                    <label
                      htmlFor="password"
                      className=" capitalize text-[#333] text-sm font-semibold mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Your Password"
                      className=" text-xs py-[17px] px-[25px] mb-[30px] border-[#ddd]"
                      name="password"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    className="px-[29px] py-[13px] text-sm font-bold text-white border-2 border-[#b0574f] transition-all duration-300 bg-[0px] hover:bg-white hover:text-black hover:bg-[100%] uppercase "
                    style={{
                      backgroundSize: "560px",
                      backgroundImage:
                        "linear-gradient(30deg, #b0574f 50%, transparent 50%)",
                    }}
                  >
                    Create Account
                  </button>
                  <div>
                    <div>
                      <p>
                        If you have already account?
                        <Link href="/login">
                          <span className="text-[#b0574f]">Login</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
