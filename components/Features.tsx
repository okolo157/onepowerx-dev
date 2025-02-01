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
            backgroundImage: "url(/images/payingbills.jpg)",
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
        </div>

        <div
          className="flex-[50%] p-10 rounded-2xl bg-[#0a0a0a] flex items-left justify-center flex-col gap-10 relative "
          style={{
            backgroundImage: "url(/images/savings.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>

          <h2 className="font-bold text-4xl text-left self-start z-10 w-1/3 text-white">
            Pay bills and earn returns
          </h2>
          <p className="z-10  text-white  text-xl">
            With onepower, bill payment is a stress free endeavour, watch your
            returns grow into sizeable savings{" "}
          </p>
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
            src="/images/chart.png"
            alt="one power chart"
            width={1000}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
