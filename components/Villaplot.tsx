import { MoveRight } from "lucide-react";
import React from "react";

export function Villaplot() {
  return (
    <main className="max-w-7xl mx-auto my-10 max-md:px-5">
      <div className="border-y-[1px] py-10">
        <div className="flex flex-col md:flex-row  gap-6 md:gap-10">
          <div className=" md:space-y-5 w-full max-w-96">
            <h3 className="font-playfair text-2xl italic font-medium">Plots</h3>
            <p className="cursor-pointer underline w-full">See all plots</p>
          </div>
          <div className="w-full">
            <img
              src="/assets/herobanner/Banner-1.png"
              alt="Villa plot"
              className="h-[25vh] w-full ml-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="border-b-[1px] py-10">
        <div className="flex flex-col md:flex-row  gap-6 md:gap-10">
          <div className=" md:space-y-5 w-full max-w-96">
            <h3 className="font-playfair text-2xl italic font-medium">
              Villas
            </h3>
            <p className="cursor-pointer underline w-full">See all villas</p>
          </div>
          <div className="w-full">
            <img
              src="/assets/herobanner/Banner-2.png"
              alt="Villa plot"
              className="h-[25vh] w-full ml-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-b-[1px] py-10 gap-10">
        <div>
          <img
            src="/assets/herobanner/Banner-3.png"
            alt="Villa plot"
            className="h-[70vh] w-full ml-auto"
            loading="lazy"
          />
        </div>
        <div className="bg-[#F8F8F8] space-y-8 place-content-center  p-4 md:px-10">
          <h3 className="text-2xl md:text-4xl md:leading-[1.2em] font-medium ">
            Why Choose Lonavala for Your Next Real Estate Investment?
          </h3>
          <p className="text-sm md:leading-7">
            Lonavala offers the perfect blend of natural beauty, serenity, and
            accessibility. With its lush greenery, scenic hills, and proximity
            to Mumbai and Pune, it's an ideal location for a peaceful holiday
            home. Plus, the growing demand for vacation properties in this area
            makes it a smart investment, offering both a serene escape and
            long-term value.
          </p>
          <div className="font-medium flex items-center gap-x-10 cursor-pointer">
            <button>contact us</button>
            <MoveRight className="text-sm" />
          </div>
        </div>
      </div>
    </main>
  );
}
