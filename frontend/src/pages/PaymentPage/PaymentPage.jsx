import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiUrl from "api/doctors";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import "../../styles/PaymentPage.css";
import Doc from "../../assets/images/doc.jpg";

function PaymentPage() {
  const location = useLocation();
  const { updatedFormData, doctorFees } = location.state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState(updatedFormData);
  const [amount, setAmount] = useState(doctorFees * 100);
  const currency = "INR";
  const receiptId = "qwsaq1";

  useEffect(() => {
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

    loadRazorpayScript()
      .then(() => {
        console.log("Razorpay script loaded successfully");
      })
      .catch((error) => {
        console.error("Failed to load Razorpay script", error);
      });
  }, []);

  const paymentHandler = async (e) => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}${apiUrl.PAYMENT_ORDER}`,
      {
        method: "POST",
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(doctorFees);
    console.log(amount);
    const order = await response.json();
    console.log(order);

    var options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount,
      currency,
      name: "Aryan Hospital",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
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

        // Check if payment is successful
        if (jsonRes.msg === "success") {
          // Save form data and payment response to the payment database
          try {
            const paymentResponse = await fetch(
              `${process.env.REACT_APP_BACKEND_URL}/api/payments/submit`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...formData,
                  amount: doctorFees,
                  currency,
                  receiptId,
                  paymentStatus: "success",
                  paymentResponse: response, // Assuming 'response' is the payment response object
                }),
              }
            );

            if (!paymentResponse.ok) {
              const errorData = await paymentResponse.json();
              console.error("Error submitting payment:", errorData);
              throw new Error("Failed to submit payment");
            }

            const data = await paymentResponse.json();
            console.log("Payment submitted successfully:", data);
            toast.success("Your payment has been processed successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });

            // Submit appointment data to the backend
            await sendConfirmationEmail();
            navigate("/");
          } catch (error) {
            console.error("Error submitting payment:", error.message);
            toast.error("Failed to submit payment", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        } else {
          toast.error("Payment failed", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phoneNo,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", async function (response) {
      const errorMessage = response.error.description;

      // Display the error message using a toast notification
      toast.error(`Payment failed: ${errorMessage}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Save payment data to the payment database with status 'failed'
      try {
        const paymentResponse = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/payments/submit`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              amount: doctorFees,
              currency,
              receiptId,
              paymentStatus: "failed",
              paymentResponse: response, // Assuming 'response' is the payment response object
            }),
          }
        );
        if (!paymentResponse.ok) {
          const errorData = await paymentResponse.json();
          console.error("Error submitting payment:", errorData);
          throw new Error("Failed to submit payment");
        }

        const data = await paymentResponse.json();
        console.log("Payment data submitted successfully:", data);
      } catch (error) {
        console.error("Error submitting payment:", error.message);
      }

      navigate("/");
    });
    rzp1.open();
    e.preventDefault();
  };

  const sendConfirmationEmail = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/appointments/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            appointmentDetails: {
              name: formData.name,
              date: formData.date,
              time: formData.time,
              department: formData.department,
            }, // Provide payment link here
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error sending confirmation email:", errorData);
        throw new Error("Failed to send confirmation email");
      }
      toast.success("Confirmation mail has been sent successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error sending confirmation email:", error.message);
      toast.error("Failed to send confirmation email", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="paymain">
      <div className="product">
        <div className="payment-image">
          <p>
            Thank you for choosing Aryan Hospital for your healthcare needs.
            Please proceed with the payment to complete your booking.
          </p>
        </div>
        <div className="payment-details">
          <h2>Payment</h2>
          <p>
            Amount: {doctorFees} {currency}
          </p>
          <br />
          <button onClick={paymentHandler}>Pay</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
