import React from "react";
import { IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItems = () => {
  return (
    <div className="p-5 mt-10 shadow-md border rounded">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="/p1.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70">Size: L,White</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6">
            <p className=" font-semibold">$199</p>
            <p className=" opacity-50 line-through">$211</p>
            <p className=" font-semibold text-green-600">5% Off</p>
          </div>
        </div>
      </div>
      <div className=" lg:flex item-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <AddCircleOutlineIcon sx={{ color: "RGB(145 85 253)" }} />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
