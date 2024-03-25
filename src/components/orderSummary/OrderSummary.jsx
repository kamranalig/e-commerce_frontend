"use client";
import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItems from "../cartItems/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../redux/orderSlice/OrderSlice";
const OrderSummary = () => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.order);
  console.log("here is order", order?.shippingAddress);
  const searchParamms = new URLSearchParams(window.location.search);

  const orderId = searchParamms.get("orderId");

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);
  return (
    <div>
      <div className="p-5 shadow-md rounded-s-md border">
        <AddressCard address={order?.shippingAddress} />
      </div>
      <div className="mt-10 relative lg:grid grid-cols-3 ">
        <div className="col-span-2">
          {order?.orderItems &&
            order?.orderItems?.map((item) => <CartItems item={item} />)}
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
                  <span>${order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">${order?.discounte}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ${order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
            </div>
            <button className=" bg-[#9155fd] px-8 py-3 text-white mt-4 w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
