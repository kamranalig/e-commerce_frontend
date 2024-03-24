import React from "react";
import CartItems from "../../components/cartItems/CartItems";
import Link from "next/link";
const page = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="mt-10 relative lg:grid grid-cols-3 ">
        <div className="col-span-2">
          {[1, 1, 1].map((item) => (
            <CartItems />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <div className="px-4 pt-4">
              <p className=" uppercase font-bold opacity-60 pb-4">
                Price Detail
              </p>
              <hr />
              <div className=" space-y-3 font-semibold mb-6">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>$460</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">$150</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">$4630</span>
                </div>
              </div>
            </div>
            <Link href="/checkout?step=2">
              <button className=" bg-[#9155fd] px-8 py-3 text-white mt-4 w-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
