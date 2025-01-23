import Image from "next/image";
import React from "react";
import {
  faMoneyBill,
  faRecycle,
  faSignIn,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    src: "/images/register-new.jpg",
    icon: faSignIn,
    text: "Register an account",
  },
  { src: "/images/piggy.jpg", icon: faWallet, text: "Fund your wallet" },
  { src: "/images/paybill.jpg", icon: faMoneyBill, text: "Pay bills" },
  { src: "/images/bills.jpg", icon: faRecycle, text: "Earn returns" },
];

export const Steps: React.FC = () => {
  return (
    <div className="my-40 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        {data.map(({ src, icon, text }, index) => (
          <div
            key={index}
            className="bg-white border-custom2 border rounded-2xl shadow-lg ease-in-out transition-transform transform hover:scale-105 relative"
          >
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-4 bg-custom2 border border-double text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg z-10">
              {index + 1}
            </div>

            <div className="relative h-40">
              <Image
                src={src}
                alt={`Step ${index + 1}: ${text}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            <div className="p-6 text-center">
              <div className="flex justify-center items-center mb-4">
                <FontAwesomeIcon
                  icon={icon}
                  className="w-8 h-8 text-custom2"
                  aria-hidden="true"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
