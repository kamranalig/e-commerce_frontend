import React from "react";
import { Grid, Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddressCard from "../../../components/AddressCard/AddressCard";
import OrderTraker from "../../../components/orderTraker/OrderTraker";

const page = () => {
  return (
    <div className="max-w-[1140px] mx-auto py-[40px]">
      <div className=" shadow-md p-5">
        <h1 className=" font-semibold text-xl my-3"> Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            className=" shadow-md rounded-md p-5 border"
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="/p2.jpg"
                  alt="image"
                />
                <div className="ml-5 space-y-2">
                  <p className=" font-semibold">
                    Men Slim Mid Rise Black Jeans{" "}
                  </p>
                  <p className=" space-x-5 opacity-50 text-sm font-semibold">
                    <span>Color:Pink</span>
                    <span>Size:M</span>
                  </p>
                  <p>Seller: Hamza</p>
                  <p>$1050</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box>
                <StarBorderIcon
                  sx={{ fontSize: "2rem", color: "#6B4EBA" }}
                  className="px-2"
                />
                <span className="text-purple-800">Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default page;
