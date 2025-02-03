import {
  faSignIn,
  faWallet,
  faMoneyBill,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    icon: faSignIn,
    text: "Register an account",
    description: "Create your account to get started with our services.",
  },
  {
    icon: faWallet,
    text: "Fund your wallet",
    description: "Add funds to your wallet to use our services.",
  },
  {
    icon: faMoneyBill,
    text: "Pay bills",
    description: "Use your wallet balance to pay your bills easily.",
  },
  {
    icon: faRecycle,
    text: "Earn returns",
    description: "Earn returns on your wallet balance over time.",
  },
];

export const Steps: React.FC = () => {
  return (
    <div className="my-32 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-[50px] font-bold mb-4">
          {" "}
          Pay for <span className="text-custom2 font-Display">
            Utilities
          </span>{" "}
          and earn <span className="text-custom2 font-Display">Returns</span>{" "}
        </h2>
        <p className="text-lg text-white">
          When you fund your wallet and make transactions, you instantly get
          returns back into your wallet which means you CANNOT have ZERO balance
          in your wallet as long as you are buying utilities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        {data.map(({ icon, text, description }, index) => (
          <div
            key={index}
            className="bg-[#161616] text-white border  border-transparent rounded-2xl shadow-lg ease-in-out transition-transform transform hover:scale-105 relative p-8 flex flex-col items-center"
          >
            <FontAwesomeIcon icon={icon} className="text-5xl mb-6" />
            <p className="text-xl font-semibold text-center">{text}</p>
            <p className="text-base text-center mt-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
