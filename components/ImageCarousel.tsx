"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { MoveLeft, MoveRight, MoveUpRight } from "lucide-react";
import { useState } from "react";

const Images = [
  { src: "./assets/herobanner/Banner-1.png", projectName: "Casa Hillside" },
  { src: "./assets/herobanner/Banner-2.png", projectName: "Seaside Retreat" },
  { src: "./assets/herobanner/Banner-3.png", projectName: "Misty Peaks" },
  { src: "./assets/herobanner/Banner-1.png", projectName: "Casa Hillside" },
  { src: "./assets/herobanner/Banner-2.png", projectName: "Seaside Retreat" },
  { src: "./assets/herobanner/Banner-3.png", projectName: "Misty Peaks" },
  { src: "./assets/herobanner/Banner-1.png", projectName: "Casa Hillside" },
  { src: "./assets/herobanner/Banner-2.png", projectName: "Sunset Villa" },
  { src: "./assets/herobanner/Banner-3.png", projectName: "Mountain Lodge" },
];

const GAP = 1; //rem
const slideWidth = 20; //% - must not be 0

export function ImageCarousel() {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const [begInd, setBegInd] = useState(0);
  const [activeInd, setActiveInd] = useState(0);

  const slidesPerView = isMobile ? 2 : 3;
  const endInd = begInd + slidesPerView - 1;

  const dragX = useMotionValue(0);

  const carouselContainerWidth =
    slideWidth * Images.length +
    (100 / slideWidth - slidesPerView) * slideWidth;

  const x = (slideWidth / carouselContainerWidth) * 100;

  const slidePrev = () => {
    if (begInd <= 0) return;

    if (activeInd === endInd) setActiveInd(endInd - 1);

    setBegInd(pv => pv - 1);
  };

  const slideNext = () => {
    if (endInd >= Images.length - 1) return;

    if (activeInd === begInd) setActiveInd(begInd + 1);

    setBegInd(pv => pv + 1);
  };

  const onDragEnd = () => {
    const _dragX = dragX.get();

    if (_dragX <= -20) slideNext();
    else if (_dragX >= 20) slidePrev();
  };

  return (
    <main className=" max-w-7xl mx-auto  max-md:px-5">
      <div className="flex flex-col md:flex-row gap-4 justify-between md:gap-x-10">
        <h3 className="text-2xl max-w-96 w-full font-medium">Photo Gallery</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex,
          enim earum illum nemo quisquam consequatur mollitia at voluptatum ad
          excepturi. Error modi quae quam corrupti reprehenderit recusandae
          neque eligendi!
        </p>
      </div>
      <div className="my-10">
        <div
          className="w-full mx-auto relative flex items-center"
          style={{ maxWidth: `${80 + GAP}rem` }}
        >
          <div className="h-[280px] md:h-[350px] w-full overflow-x-clip">
            <motion.div
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={onDragEnd}
              animate={{
                gridTemplateColumns:
                  "1fr ".repeat(activeInd) +
                  `${100 / slideWidth - (slidesPerView - 1)}fr` +
                  " 1fr".repeat(Images.length - (activeInd + 1)),
                translateX: `-${x * begInd}%`,
              }}
              className="h-full grid"
              style={{ width: `${carouselContainerWidth}%`, x: dragX }}
              transition={{ duration: 1, type: "spring" }}
            >
              {Images.map(({ src, projectName }, index) => {
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveInd(index)}
                    style={{ paddingInline: `${GAP / 2}rem` }}
                  >
                    <ImageSlider
                      src={src}
                      index={index}
                      activeIndex={activeInd}
                      projectName={projectName}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* carousel buttons */}
          <button
            onClick={slidePrev}
            className={cn(
              "absolute left-3 md:left-4 top-1/2 -translate-y-1/2 size-6 md:size-8 rounded-full cursor-default grid place-content-center bg-newhome-secondary opacity-0 transition-opacity duration-300 text-white",
              { "opacity-90 hover:opacity-100 cursor-pointer": begInd > 0 }
            )}
          >
            <MoveLeft className="size-4 md:size-5" />
          </button>
          <button
            onClick={slideNext}
            className={cn(
              "absolute right-3 md:right-4 top-1/2 -translate-y-1/2 size-6 md:size-8 rounded-full cursor-default grid place-content-center bg-newhome-secondary opacity-0 transition-opacity duration-300 text-white",
              {
                "opacity-90 hover:opacity-100 cursor-pointer":
                  endInd < Images.length - 1,
              }
            )}
          >
            <MoveRight className="size-4 md:size-5" />
          </button>

          {/* Edges */}
          <div
            className="absolute left-0 inset-y-0 bg-white"
            style={{ width: `${GAP / 2}rem` }}
          />
          <div
            className="absolute right-0 inset-y-0 bg-white"
            style={{ width: `${GAP / 2}rem` }}
          />
        </div>
      </div>
    </main>
  );
}

type ImageCarouselProps = {
  src: string;
  index: number;
  activeIndex: number;
  projectName: string;
};

function ImageSlider({
  index,
  activeIndex,
  src,
  projectName,
}: ImageCarouselProps) {
  return (
    <div className="h-full relative">
      <div className="size-full relative rounded-newhome overflow-hidden">
        <img
          className="absolute size-full object-cover object-center"
          src={src}
        ></img>
      </div>
      <div className="absolute inset-x-1 md:inset-x-5 bottom-3 max-md:px-2 md:bottom-5 h-5 md:h-8">
        <div className="h-full flex justify-between items-center gap-1 md:gap-2">
          {/* play text */}
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <span aria-hidden className="inline-block md:text-xl text-white">
                {projectName.split("").map((letter, idx, word) => (
                  <motion.span
                    key={"letter-" + idx}
                    variants={{
                      initial: {
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          delay: 0.02 * (word.length - (idx + 1)),
                        },
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 0.2,
                          delay: 0.1 + 0.02 * (idx + 1),
                        },
                      },
                    }}
                    initial="initial"
                    animate="visible"
                    exit="initial"
                    className="inline-block"
                  >
                    {letter === " " ? <>&nbsp;</> : letter}
                  </motion.span>
                ))}
              </span>
            )}
          </AnimatePresence>

          {activeIndex === index && (
            <button className=" border-[1px] rounded-full p-0.5 md:p-1 border-dashed">
              <MoveUpRight className="text-black bg-white rounded-full p-1.5 md:p-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
