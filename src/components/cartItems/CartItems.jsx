import React from "react";
import { IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import {
  updateCartItem,
  removeCartItem,
} from "../../redux/cartSlice/CartSlice";
const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (quan) => {
    const updatedQuantity = item?.quantity + quan;

    if (updatedQuantity > 0) {
      const data_ = {
        data: { quantity: updatedQuantity },
        cartItemId: item?._id,
      };

      dispatch(updateCartItem(data_));
    }
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item._id));
  };
  return (
    <div className="p-5 mb-5 shadow-md border rounded">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={item?.product?.imageUrl}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold"> {item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size}</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6">
            <p className=" font-semibold">${item?.price}</p>
            <p className=" opacity-50 line-through">${item?.discountedPrice}</p>
            <p className=" font-semibold text-green-600">
              {item?.product?.discountPersent}% Off
            </p>
          </div>
        </div>
      </div>
      <div className=" lg:flex item-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item?.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
          <IconButton onClick={() => handleUpdateCartItem(1)}>
            <AddCircleOutlineIcon sx={{ color: "RGB(145 85 253)" }} />
          </IconButton>
        </div>
        <div>
          <Button
            sx={{ color: "RGB(145 85 253)" }}
            onClick={handleRemoveCartItem}
          >
            remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
