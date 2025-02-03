import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#161616] text-white p-10 ">
      <div className="">
        <div className="flex justify-between p-10">
          <div className="flex-1">
            <h1>Help Center</h1>
            <hr className="mr-80 my-4 h-[2px] bg-white" />
            <a>Live chat</a>
          </div>
          <div className="flex-1">
            <h1>Contact Us</h1>
            <hr className="mr-80 my-4 h-[2px] bg-white" />
            <div className="flex flex-col gap-4">
              <a>Twitter</a>
              <a>Facebook</a>
              <a>Instagram</a>
            </div>
          </div>
          <div className="flex-1">
            <h1>Stay in touch</h1>
            <hr className="mr-80 my-4 h-[2px] bg-white" />
            <div className="flex flex-col gap-3">
              <p className="flex flex-col">hello@onepower.com.ng</p>
              <p>+234 80360 97457 +234 81880 80174</p>
              <p>No 2 A Close, 6th Avenue, Gwarimpa. FCT Abuja, Nigeria</p>
            </div>
          </div>
        </div>
        <hr className="my-7" />
        <div className="flex justify-between mt-4">
          <p>Terms of Service</p>
          <p>Copyright © Onepower Integrated Solutions Limited. - 2025</p>
        </div>
      </div>
    </div>
  );
}
