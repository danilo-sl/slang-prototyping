import React from "react";

export default function Draft() {
  return (
    <div className="flex h-screen bg-gray-900/50">
      <div className="flex h-screen flex-col place-content-between bg-white p-8 sm:m-auto sm:h-auto sm:max-w-lg sm:rounded-lg">
        <div className="space-y-2">
          <h3 className="text-center text-xl font-semibold">
            Welcome to Slang 🎉
          </h3>
          <p className="text-center text-gray-500">
            {" "}
            We're glad to have you here! You can start with a quick tour on how
            to learn with Slang or jump right in to explore it yourself.
          </p>
        </div>
        <div className="py-8">
          <video autoPlay loop muted>
            <source src="/guided-tour-animation.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="grid w-full sm:flex sm:space-x-4">
          <button className="order-2 mt-4 cursor-pointer rounded-lg border border-gray-200 p-4 font-medium hover:bg-gray-100 sm:order-none sm:mt-0 sm:w-1/2">
            See how Slang works
          </button>
          <button className="order-1 cursor-pointer rounded-lg bg-blue-500 p-4 font-medium text-white hover:bg-blue-600 sm:order-none sm:w-1/2">
            Explore on my own
          </button>
        </div>
      </div>
    </div>
  );
}
