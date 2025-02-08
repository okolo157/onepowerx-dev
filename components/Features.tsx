import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-center text-[50px]">
          We offer
          <span className="font-Display text-custom2"> Tailored Solutions</span>
        </h1>
      </div>
      <div className="flex gap-7 p-8 mt-12">
        <div
          className="p-12 rounded-2xl bg-[#0a0a0a] flex items-left justify-center flex-col flex-[50%] gap-7 relative"
          style={{
            backgroundImage: "url(/images/payingbills.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
          <h2 className="font-bold text-4xl text-left self-start z-10 w-1/3 text-white">
            Secure Payments
          </h2>
          <p className="z-10  text-white  text-xl">
            Make secure payments from the comfort of your home, and pay your
            Airtime, Data, Electricity, and Cable TV bills.
          </p>
          <button className="border-2 flex justify-between items-center px-4 py-1 transition-transform ease-in-out transform hover:scale-105 border-custom2 rounded-full w-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
            Get Started
          </button>
        </div>

        <div
          className="flex-[50%] p-10 rounded-2xl bg-[#0a0a0a] flex items-left justify-center flex-col gap-10 relative "
          style={{
            backgroundImage: "url(/images/savings.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>

          <h2 className="font-bold text-4xl text-left self-start z-10 w-2/3 text-white">
            Pay bills and earn returns
          </h2>
          <p className="z-10  text-white text-xl">
            With onepower, bill payment is a stress free endeavour, watch your
            returns grow into sizeable savings{" "}
          </p>
          <button className="border-2 flex justify-between items-center px-4 py-1 transition-transform ease-in-out transform hover:scale-105 border-custom2 rounded-full w-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
            Get Started
          </button>
        </div>
      </div>
      <div className="flex gap-7 p-8">
        <div className="flex-[70%] p-10 rounded-2xl bg-[#161616] flex items-left justify-center flex-col gap-4 ">
          <h2 className="font-bold text-4xl text-left self-start z-10  text-white">
            Fund your wallet from savings
          </h2>
          <p className="text-white  text-xl">
            Credit your wallet with accumulated funds from your savings platform
          </p>
          <Image
            src="/images/chart.webp"
            alt="one power chart"
            width={1000}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
