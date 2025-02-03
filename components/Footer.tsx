import React from "react";

export default function Footer() {
  return (
      <div className="bg-black text-white w-[1440px] self-center bottom-0 left-0">
        <div className="container mx-auto p-4">
          <div className="flex justify-between">
            <div className="flex-1">
              <h1>Help Center</h1>
            </div>
            <div className="flex-1">
              <h1>Contact Us</h1>
            </div>
            <div className="flex-1">
              <h1>Stay in touch</h1>
              <p className="flex flex-col">
                hello@onepower.com.ng +234 80360 97457 +234 81880 80174
              </p>
              <p>No 2 A Close, 6th Avenue, Gwarimpa. FCT Abuja, Nigeria</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <p>Terms of Service</p>
            <p>Copyright © Onepower Integrated Solutions Limited. - 2022</p>
          </div>
        </div>
    </div>
  );
}
