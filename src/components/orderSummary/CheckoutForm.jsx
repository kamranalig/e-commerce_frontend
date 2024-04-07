import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { createPayment } from "../../redux/paymentSlice/PaymentSlice";

const CheckoutForm = ({ orderId }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or Elements not initialized.");
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.error("Error creating PaymentMethod:", error);
        setError(error.message);
      } else {
        console.log("PaymentMethod created:", paymentMethod);

        // Dispatch action to create payment
        const paymentResult = await dispatch(createPayment({ orderId }));

        if (paymentResult.payload && paymentResult.payload.success) {
          console.log("Payment successful!");
        } else {
          console.error("Payment failed:", paymentResult.error);
          setError("Payment failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setError("Error processing payment. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Card Details</label>
        <CardElement className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!stripe}
      >
        Pay Now
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
};

export default CheckoutForm;
