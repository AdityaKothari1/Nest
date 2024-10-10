import { PropertyImageSlider } from "@/components";
import { BedDoubleIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const propertyid = "1";
  return (
    <main>
      <div className="w-full h-80 relative mt-24">
        <Image
          className="object-cover"
          src="/assets/herobanner/Banner-3.png"
          fill
          alt="villas"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black/5 w-full">
          <h2 className="text-3xl md:text-5xl font-playfair">
            Own your villa Today
          </h2>
          <p className="text-lg md:text-xl pt-3 px-2">
            Explore our collection of available homes
          </p>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2  max-w-7xl max-md:px-5 mx-auto my-10 gap-10">
        <Link href={`/our-villas/${propertyid}`}>
          <div className="flex  flex-col md:flex-row h-[40rem] md:h-[22rem] max-md:space-y-5">
            <div className="w-full  md:w-1/2 h-full relative">
              <Image
                className="object-cover w-full h-full"
                src="/assets/herobanner/Banner-3.png"
                alt="villas"
                fill
              />
            </div>
            <div className="space-y-5  md:place-content-start  md:pl-5 md:w-1/2 relative  h-full md:pt-5">
              <h3 className="text-2xl font-bold font-playfair">
                Casa Hillside
              </h3>
              <div className="flex items-center text-[#808080] ">
                <MapPin className="text-sm" />
                <span className="text-base ">Lonavala, Maharashtra</span>
              </div>
              <p className="text-lg ">From Rs. 13.8L</p>
              <p className="text-lg ">Featured Property</p>
              <div className="flex space-x-4 text-xs border-y-[1px] border-[#808080] py-4">
                <div className="flex items-center gap-x-1  w-full ">
                  <BedDoubleIcon size={16} />
                  <span>3 Beds</span>
                </div>
                <span className="border-[1px]" />
                <div className="flex items-center gap-x-1  w-full ">
                  <BedDoubleIcon size={16} />
                  <span className="">3 Baths</span>
                </div>
                <span className="border-[1px]" />
                <div className="flex items-center gap-x-1  w-full ">
                  <BedDoubleIcon size={16} />
                  <span>965sq.ft</span>
                </div>
              </div>
              <button className="border-[1px] rounded-sm  py-3 absolute bottom-0 md:left-[1rem] inset-x-0">
                View More
              </button>
            </div>
          </div>
        </Link>
        <div className="flex  flex-col md:flex-row h-[40rem] md:h-[22rem] max-md:space-y-5">
          <div className="w-full  md:w-1/2 h-full relative">
            <Image
              className="object-cover w-full h-full"
              src="/assets/herobanner/Banner-3.png"
              alt="villas"
              fill
            />
          </div>
          <div className="space-y-5  md:place-content-start  md:pl-5 md:w-1/2 relative  h-full md:pt-5">
            <h3 className="text-2xl font-bold font-playfair">Casa Hillside</h3>
            <div className="flex items-center text-[#808080] ">
              <MapPin className="text-sm" />
              <span className="text-base ">Lonavala, Maharashtra</span>
            </div>
            <p className="text-lg ">From Rs. 13.8L</p>
            <p className="text-lg ">Featured Property</p>
            <div className="flex space-x-4 text-xs border-y-[1px] border-[#808080] py-4">
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span>3 Beds</span>
              </div>
              <span className="border-[1px]" />
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span className="">3 Baths</span>
              </div>
              <span className="border-[1px]" />
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span>965sq.ft</span>
              </div>
            </div>
            <button className="border-[1px] rounded-sm  py-3 absolute bottom-0 md:left-[1rem] inset-x-0">
              View More
            </button>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row h-[40rem] md:h-[22rem] max-md:space-y-5">
          <div className="w-full  md:w-1/2 h-full relative">
            <Image
              className="object-cover w-full h-full"
              src="/assets/herobanner/Banner-3.png"
              alt="villas"
              fill
            />
          </div>
          <div className="space-y-5  md:place-content-start  md:pl-5 md:w-1/2 relative  h-full md:pt-5">
            <h3 className="text-2xl font-bold font-playfair">Casa Hillside</h3>
            <div className="flex items-center text-[#808080] ">
              <MapPin className="text-sm" />
              <span className="text-base ">Lonavala, Maharashtra</span>
            </div>
            <p className="text-lg ">From Rs. 13.8L</p>
            <p className="text-lg ">Featured Property</p>
            <div className="flex space-x-4 text-xs border-y-[1px] border-[#808080] py-4">
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span>3 Beds</span>
              </div>
              <span className="border-[1px]" />
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span className="">3 Baths</span>
              </div>
              <span className="border-[1px]" />
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span>965sq.ft</span>
              </div>
            </div>
            <button className="border-[1px] rounded-sm  py-3 absolute bottom-0 md:left-[1rem] inset-x-0">
              View More
            </button>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row h-[40rem] md:h-[22rem] max-md:space-y-5">
          <div className="w-full  md:w-1/2 h-full relative">
            <Image
              className="object-cover w-full h-full"
              src="/assets/herobanner/Banner-3.png"
              alt="villas"
              fill
            />
          </div>
          <div className="space-y-5  md:place-content-start  md:pl-5 md:w-1/2 relative  h-full md:pt-5">
            <h3 className="text-2xl font-bold font-playfair">Casa Hillside</h3>
            <div className="flex items-center text-[#808080] ">
              <MapPin className="text-sm" />
              <span className="text-base ">Lonavala, Maharashtra</span>
            </div>
            <p className="text-lg ">From Rs. 13.8L</p>
            <p className="text-lg ">Featured Property</p>
            <div className="flex space-x-4 text-xs border-y-[1px] border-[#808080] py-4">
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span>3 Beds</span>
              </div>
              <span className="border-[1px]" />
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span className="">3 Baths</span>
              </div>
              <span className="border-[1px]" />
              <div className="flex items-center gap-x-1  w-full ">
                <BedDoubleIcon size={16} />
                <span>965sq.ft</span>
              </div>
            </div>
            <button className="border-[1px] rounded-sm  py-3 absolute bottom-0 md:left-[1rem] inset-x-0">
              View More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between my-10">
        <div className="bg-black  text-white w-full max-md:px-5 py-10">
          <div className="w-fit h-full  max-w-96 md:ml-20 place-content-center space-y-5 max-md:pt-5">
            <h2 className=" text-3xl md:text-4xl">
              Need any help to find your home?
            </h2>
            <p className=" md:text-lg">We can help to find your dream home.</p>
            <button className="bg-white text-black px-8 py-3">
              Contact us
            </button>
          </div>
        </div>
        <div className="relative w-full h-[400px]">
          <Image
            className="object-cover"
            src="/assets/herobanner/Banner-3.png"
            alt="villas"
            fill
          />
        </div>
      </div>

      <PropertyImageSlider />
    </main>
  );
}
