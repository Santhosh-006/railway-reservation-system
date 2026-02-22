import React from "react";

const PnrCheck = () => {
  return (
    <>
      <div class="container mx-auto px-6 max-w-2xl mt-5">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
          Check PNR Status
        </h1>

        <div class="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="Enter 10-digit PNR Number"
            class="w-full border-2 border-gray-300 p-4 rounded-lg text-lg focus:border-primary focus:outline-none"
          />
          <button class="bg-fuchsia-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primaryHover">
            Check
          </button>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="bg-green-500 text-white p-4 flex justify-between items-center">
            <span class="font-bold text-lg">PNR: 8492039482</span>
            <span class="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-bold">
              CNF (Confirmed)
            </span>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center border-b pb-4 mb-4">
              <div>
                <p class="text-sm text-gray-500">Train</p>
                <p class="font-bold text-xl">12901 - Express 101</p>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500">Date</p>
                <p class="font-bold text-xl">12 Oct</p>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between bg-gray-50 p-3 rounded">
                <span>Passenger 1</span>
                <span class="font-bold text-gray-800">B1, 45</span>
              </div>
              <div class="flex justify-between bg-gray-50 p-3 rounded">
                <span>Passenger 2</span>
                <span class="font-bold text-gray-800">B1, 46</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PnrCheck;
