import React from "react";

const SubscriptionForm = () => {
  return (
    <>
      <div
        className="relative bg-[#f2312d] w-96 lg:w-[1200px] lg:-mb-28 -mb-28 mx-auto rounded-2xl px-8 py-8 h-48 lg:h-64 mt-8 bg-cover bg-center z-10"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/373/669/non_2x/dashed-line-paper-airplane-route-with-location-icon-free-png.png')`,
        }}
      >
        <div className="text-white flex flex-col items-center -mt-2 lg:-mt-2 justify-center h-full text-center">
          {/* Top Heading */}
          <h2 className="text-2xl lg:text-3xl font-roboto font-bold mb-2">
            MBBS in Russia
          </h2>

          {/* Paragraph */}
          <p className="text-sm font-roboto lg:text-base mb-4">
             Presented by RREC Team Officials Russia
          </p>

          {/* Input Field and Subscribe Button */}
          <div className="flex items-center justify-center gap-2 w-full lg:w-[600px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-4 lg:py-4 font-roboto text-black rounded-lg outline-none"
            />
            <button className="bg-black text-white font-semibold py-2 lg:py-4 px-6 rounded-lg hover:bg-gray-100 hover:text-black transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionForm;
