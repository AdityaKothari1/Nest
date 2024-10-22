import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <main className="bg-black">
      <footer className=" text-white py-10 max-md:px-5 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="w-20 h-20 ">
            {/* <img className="w-full h-full object-contain" src="" alt="" /> */}
          </div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <h3>Sitemap</h3>
              <ul className="text-sm space-y-1">
                <li>Home</li>
                <li>Listings</li>
                <li>Why us</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Contact Us</h3>
              <ul className="text-sm space-y-1">
                <li>info@nestproperties.in</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start w-full ">
            <h2 className="text-3xl">Don’t Miss Out</h2>
            <p> Our property posting and listing.</p>

            <input
              className="placeholder:text-sm pl-5  py-2 text-black focus:outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-white text-black px-5 py-2">Subscribe</button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between mt-10 gap-4">
          <p>Copyright 2023. Nest Pvt.Ltd. All Rights Reserved.</p>
          <div className="flex  gap-10">
            <Link href="/privacy" className="">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="">
              Terms of Conditions
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
