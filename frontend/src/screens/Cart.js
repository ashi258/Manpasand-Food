import React, {useState} from "react";
import Delete from "@material-ui/icons/Delete";
import { useCart, useDispatchCart } from "../components/ContextReducer/ContextReducer";
// import {loadStripe} from '@stripe/stripe-js';
// import Razorpay from "razorpay";
export default function Cart() {
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);

  let data = useCart();
  let dispatch = useDispatchCart();

  if (!data) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3 text-white">
          The Cart is Empty!
        </div>
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3  text-white">
          The Cart is Empty!
        </div>
      </div>
    );
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch(`${window.location.origin}/api/OrderData`, {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("JSON RESPONSE:::::", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };



const handleOpenRazorpay = (data) => {
  const options = {
    key: 'rzp_test_nNTygci8PuECZq',
    amount: Number(data.amount),
    currency: data.currency,
    order_id: data.id,
    name: 'Manpasand',
    handler: function (response) {
      console.log(response, "34");
      // fetch('http://localhost:5000/api/verify', {
        fetch(`${window.location.origin}/api/verify`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ response: response }),
      })
        .then((res) => {
          console.log(res, "37");
          // Handle the response
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};


const handlePayment = async (amount) => {
  const _data = { amount: amount };

  await fetch(`${window.location.origin}/api/payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(_data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "29");
      handleOpenRazorpay(data.data);
    })
    .catch((err) => {
      console.error(err);
    });
    setTimeout(() => {
      setPaymentSuccessful(true);
    }, 2000);
}

  

  

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      {console.log(data)}
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="table">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className=" text-white fs-4">
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn bg-white p-0">
                    <Delete
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2  text-white">
            Total Price: &#8377; {totalPrice}/-
          </h1>
        </div>
        <div>
          
           {/* <button className="btn bg-success mt-5 "onClick={() => handlePayment(totalPrice)}>
            {" "}
           Payment{" "}
          </button> */}

          {isPaymentSuccessful ? (
        <button className="btn bg-success mt-5" onClick={handleCheckOut}>
          Check Out
        </button>
      ):  <button className="btn bg-success mt-5 "onClick={() => handlePayment(totalPrice)}>
      {" "}
     Payment{" "}
    </button>}
        </div>
      </div>
    </div>
  );
}
