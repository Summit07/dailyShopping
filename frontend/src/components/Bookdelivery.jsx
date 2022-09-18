import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const Bookdelivery = () => {
  const [value, setValue] = useState(new Date());
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleForm = async () => {
    console.warn(value, name, email, address, message);
    let result = await fetch(`http://localhost:5000/bookDilevery}`, {
      method: "Post",
      body: JSON.stringify({ value, name, email, address, message }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    result = await result.json();
    console.log(result);
    alert("Your Booking is confirm");
  };

  return (
    <>
      <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
        <div className="p-4">
          <form method="POST">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="phone"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Address</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="subject"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows="10"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="flex">
              <div>
                <DateTimePicker onChange={setValue} value={value} />
              </div>
            </div>
            <div className="flex  gap-6 items-center justify-center">
              <input type="checkbox" />
              <p className="text-xl font-semibold">
                if you want to give tip to Delivery person
              </p>
              <input
                placeholder="Enter the tipping  amount"
                className="text-xl"
                type="number"
              />
            </div>

            <button
              className="w-full p-4 text-gray-900 font-bold mt-4"
              onClick={handleForm}
            >
              Book Home Delivery
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Bookdelivery;
