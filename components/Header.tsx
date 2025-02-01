import Image from "next/image";
import {
  LightBulbIcon,
  HandThumbUpIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/16/solid";

const Header: React.FC = () => {
  return (
    <div className="relative px-14 mt-[-80px] overflow-hidden flex">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 z-0"></div>

      <div className="relative z-10 flex w-full">
        <div className="text-7xl font-bold flex flex-col justify-center text-left gap-3 flex-1">
          <div className="flex items-center">
            <span className="font-Display font-extrabold italic text-custom2">
              Superfast
            </span>
            <Image
              alt="rocket"
              src="/images/rocket.webp"
              width={70}
              height={80}
              className="ml-2"
            />
          </div>
          <span>
            and effortless <br /> payments.
          </span>

          <div className="py-10">
            <div className="flex flex-col justify-start items-start text-white text-lg font-thin space-y-4">
              <div className="flex items-center gap-2">
                <LightBulbIcon className="h-7 w-7 text-custom2" />
                <span>Quick transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="h-7 w-7 text-custom2" />
                <span>Low Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <HandThumbUpIcon className="h-7 w-7 text-custom2" />
                <span>Easy to Use</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="border-2 flex justify-center gap-2 transition-transform text-2xl items-center px-6 py-3 border-custom2 ease-in-out rounded-full transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                />
              </svg>
              Get Started
            </button>
            <button className="border-2 flex justify-center transform hover:scale-105 gap-2 ease-in-out transition-all text-2xl items-center px-6 py-3 border-custom2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              Quick Buy
            </button>
          </div>
        </div>

        <div className="flex-1 flex align-start py-10 justify-end">
          <div>
            <Image
              width={290}
              height={100}
              alt="onepower app on device"
              src="/images/app-preview.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
