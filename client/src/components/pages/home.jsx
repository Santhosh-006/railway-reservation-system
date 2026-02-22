import React from "react";

const Home = () => {
  return (
    <div>
      <header class="bg-fuchsia-700 text-white py-20 relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Safe & Fast Railway Booking
          </h1>
          <p class="text-lg opacity-90 mb-8">
            Book your tickets in minutes and travel with comfort.
          </p>
        </div>
        <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/train-pattern.png')]"></div>
      </header>

      <main class="container mx-auto px-6 -mt-16 relative z-20 mb-20">
        <div class="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <form
            action="trains.html"
            class="grid grid-cols-1 md:grid-cols-4 gap-6 items-end"
          >
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                From
              </label>
              <input
                type="text"
                placeholder="Station Code (e.g., NY)"
                class="w-full px-4 py-3 rounded border focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                To
              </label>
              <input
                type="text"
                placeholder="Station Code (e.g., LA)"
                class="w-full px-4 py-3 rounded border focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input
                type="date"
                class="w-full px-4 py-3 rounded border focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-primary text-white font-bold py-3 rounded hover:bg-primaryHover transition duration-300"
            >
              Search Trains
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
