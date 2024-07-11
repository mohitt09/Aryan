// frontend/src/pages/Product.jsx
import React, { useEffect, usestate } from "react";
// import TshirtImg from "./tshirt.svg";

function PaymentPage() {
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  useEffect(() => {
    // Function to load Razorpay script
    const loadRazorpayScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Failed to load Razorpay script"));
        document.body.appendChild(script);
      });
    };

    // Load Razorpay script when component mounts
    loadRazorpayScript()
      .then(() => {
        console.log("Razorpay script loaded successfully");
      })
      .catch((error) => {
        console.error("Failed to load Razorpay script", error);
      });
  }, []);

  const paymentHandler = async (e) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payments/order`, {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/payments/order/validate`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return (
    <div className="product">
      {" "}
      <h2>Tshirt</h2> <p>Solid blue cotton Tshirt</p> <br />{" "}
      <button onClick={paymentHandler}>Pay</button>{" "}
    </div>
  );
}

export default PaymentPage;
