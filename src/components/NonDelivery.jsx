import React from "react";
import { categories, data } from "../data/nonDelivery.js";

const NonDelivery = () => {
  // console.log(categories);
  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Items not for Home Delivery
        </h1>
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
            >
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
              <img src={item.image} alt={item.name} className="w-20" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex  justify-between px-2 py-4">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="font-bold">{item.price}</p>
                </div>
                <div>
                  <p>
                    <span className="bg-orange-500 text-white p-1 rounded-full">
                      {item.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Address</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows="10"
                name="message"
              ></textarea>
            </div>
            <button className="w-full p-4 text-gray-900 font-bold mt-4">
              Book Home Delivery
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NonDelivery;
