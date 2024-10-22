"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
  type CarouselEventType,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const TWEEN_FACTOR_BASE = 0.8;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);
const PropertyData = [
  {
    location: "Lonavala",
    type: "Featured Property",
    name: "Casa Hillside",
    description:
      "In the quaint village of Moira, five hundred years of history continue to stay alive. Find a place to call home in a modern, open villa - our newest pick - that sits close to a beautiful chapel.",
    bedrooms: "4 Bedroom",
    bathrooms: "4.5 Bathroom",
    price: "₹ 2.3 Cr Price",
    image: "/assets/herobanner/Banner-1.png",
  },
  {
    location: "Alibaug",
    type: "Luxury Villa",
    name: "Seaside Retreat",
    description:
      "Experience the perfect blend of luxury and nature in this stunning beachfront property. Enjoy panoramic ocean views and direct access to pristine sandy beaches.",
    bedrooms: "5 Bedroom",
    bathrooms: "5.5 Bathroom",
    price: "₹ 3.5 Cr Price",
    image: "/assets/herobanner/Banner-2.png",
  },
  {
    location: "Khandala",
    type: "Mountain Getaway",
    name: "Misty Peaks",
    description:
      "Nestled in the Western Ghats, this serene mountain retreat offers breathtaking views and a peaceful escape from city life. Immerse yourself in nature's beauty.",
    bedrooms: "3 Bedroom",
    bathrooms: "3 Bathroom",
    price: "₹ 1.8 Cr Price",
    image: "/assets/herobanner/Banner-3.png",
  },
];

export function PropertyImageSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((api: CarouselApi) => {
    tweenFactor.current =
      TWEEN_FACTOR_BASE * Number(api?.scrollSnapList().length);
  }, []);

  const tweenOpacity = useCallback(
    (api: CarouselApi, eventName?: CarouselEventType) => {
      if (!api) return;
      const engine = api?.internalEngine();
      const scrollProgress = api.scrollProgress();
      const slidesInView = api.slidesInView();
      const isScrollEvent = eventName === "scroll";
      api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          api.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );
  useEffect(() => {
    if (!api) {
      return;
    }

    setTweenFactor(api);
    tweenOpacity(api);
    api
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [api, tweenOpacity, setTweenFactor]);

  return (
    <main className="bg-[#f8f8f8] py-10">
      <h2 className="max-w-7xl mx-auto text-2xl md:text-3xl px-5">
        Explore Our Properties
      </h2>
      <div className="flex flex-col  md:flex-row justify-between items-center *:w-full  max-md:px-3 mt-10">
        <Carousel
          id="image-slider"
          setApi={setApi}
          opts={{ loop: true, align: "end" }}
          className=""
        >
          <CarouselContent className="-ml-5">
            {PropertyData.map((property, index) => (
              <CarouselItem key={index} className="basis-[80%] pl-5">
                <div
                  className={`transition-all duration-300 w-full h-96 relative place-content-center`}
                >
                  <Image
                    src={property.image}
                    alt=""
                    fill
                    className={`object-cover transition-all duration-300  rounded my-auto  ${
                      index === current ? "max-h-96" : "max-h-72"
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            onClick={() => {
              if (current === 0) {
                api?.scrollTo(PropertyData.length - 1);
                setCurrent(PropertyData.length - 1);
              } else {
                api?.scrollPrev();
                setCurrent(current - 1);
              }
            }}
            className="left-[18%] md:left-[19%] bg-[#708090] text-white"
          />
          <CarouselNext
            onClick={() => {
              if (current === PropertyData.length - 1) {
                api?.scrollTo(0);
                setCurrent(0);
              } else {
                api?.scrollNext();
                setCurrent(current + 1);
              }
            }}
            className="-right-1.5 md:-right-3 bg-[#708090] text-white"
          />
        </Carousel>
        <div id="content-slider" className="space-y-5 max-md:mt-5 mx-10">
          {PropertyData.map((property, index) => (
            <motion.div
              className="h-full space-y-5"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: current === index ? 1 : 0,
                y: current === index ? 0 : 20,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ display: current === index ? "block" : "none" }}
            >
              <motion.div
                className="flex gap-x-3"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="">{property.location}</p>
                <span className="border-black border-[1px]" />
                <p className="">{property.type}</p>
              </motion.div>
              <motion.div
                className="text-black  text-3xl md:text-5xl font-bold font-playfair leading-10"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {property.name}
              </motion.div>
              <motion.div
                className="text-black text-sm font-normal font-poppins leading-7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {property.description}
              </motion.div>
              <motion.div
                className="flex justify-between gap-x-5 border-y-[1px] border-black py-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-black flex text-sm font-normal font-poppins leading-7">
                  {property.bedrooms}
                </div>
                <div className="text-black text-sm font-normal font-poppins leading-7">
                  {property.bathrooms}
                </div>
                <div className="text-black text-sm font-normal font-poppins leading-7">
                  {property.price}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
