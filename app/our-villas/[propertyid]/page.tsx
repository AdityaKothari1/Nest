import { PropertyImageSlider, Contactform } from "@/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import React from "react";

export default function PropertyPage({
  params: { propertyid },
}: {
  params: { propertyid: string };
}) {
  return (
    <div className="mt-20 md:mt-24">
      {/* Banner */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-5">
          <h2 className="text-3xl font-playfair font-semibold">Casa de Vida</h2>
          <p className="">Alibaug</p>
        </div>
        <Carousel opts={{ loop: true, align: "center" }} className="">
          <CarouselContent className="relative max-md:aspect-square  md:h-svh  p-0 m-0 ">
            <CarouselItem className="p-0 m-0">
              <img
                src="/assets/herobanner/Banner-3.png"
                alt="Property Banner"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="p-0 m-0">
              <img
                src="/assets/herobanner/Banner-3.png"
                alt="Property Banner"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="p-0 m-0">
              <img
                src="/assets/herobanner/Banner-3.png"
                alt="Property Banner"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="p-0 m-0">
              <img
                src="/assets/herobanner/Banner-3.png"
                alt="Property Banner"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-white absolute top-1/2 left-2 cursor-pointer" />
          <CarouselNext className="text-white absolute top-1/2  right-2 cursor-pointer" />
        </Carousel>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-3 gap-x-10 justify-between">
        <div className="space-y-2 max-md:text-xs">
          <p className="text-[#959595] font-playfair">Configuration</p>
          <p className="text-gray-600">Studio & 1 BHK</p>
        </div>
        <div className="mx-auto space-y-2 max-md:text-xs">
          <p className="text-[#959595] font-playfair ">Built Up Area</p>
          <p className="">1000 sq.ft</p>
        </div>
        <div className="ml-auto space-y-2 max-md:text-xs">
          <p className="text-[#959595] font-playfair">Plot Area</p>
          <p className="text-gray-600">900 sq.ft</p>
        </div>
      </div>

      {/* About Property */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 flex md:flex-row flex-col gap-x-10 justify-between ">
        <h2 className="text-2xl md:text-3xl  mb-4 font-playfair">
          About Property
        </h2>
        <p className="text-gray-600 w-full max-w-4xl">
          Discover the charm of Casa Hillside, a luxurious villa nestled in the
          heart of Lonavala. This stunning property offers breathtaking views
          and modern amenities for a perfect getaway.
        </p>
      </div>
      {/* Amenities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 flex md:flex-row flex-col gap-x-10 justify-between">
        <h2 className="text-2xl md:text-3xl mb-8 font-playfair">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 w-full max-w-4xl ">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-gray-700">Private Pool</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-gray-700">Air Conditioning</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-700">Smart TV</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
            <span className="text-gray-700">Wi-Fi</span>
          </div>
        </div>
      </div>
      <PropertyImageSlider />
      <Contactform />
    </div>
  );
}
