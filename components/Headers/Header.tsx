"use client";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MobileNavbar } from "@/components/Headers/Mobileheader";
import { MenuIcon, XIcon } from "lucide-react";

export const NAV_LINKS = [
  { id: "Our Homes", path: "/our-villas" },
  { id: "About Us", path: "/about" },
  { id: "Contact Us", path: "/contact" },
];

// in ms
const SLIDING_ANIMATION = { duration: 500 };
const NAVLINK_ANIMATION = {
  "prime-delay": SLIDING_ANIMATION.duration,
  "transition-delay": 25,
  "transition-duration": 100,
};

export function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { scrollY } = useScroll();
  const pageScrolled = useMotionValue(0);

  const backgroundBlur = useTransform(scrollY, [0, 200], [0, 8]);
  const boxShadowSpread = useTransform(scrollY, [0, 150], [0, 5]);
  const startClrOpacity = useTransform(pageScrolled, [0, 1], [0, 0.7]);

  const closingDelayDesktop =
    NAVLINK_ANIMATION["transition-delay"] * NAV_LINKS.length +
    NAVLINK_ANIMATION["transition-duration"];

  useMotionValueEvent(scrollY, "change", latest => {
    const header = document.getElementById("new-home-header");
    if (header === null) return;

    const { height: headerHeight } = header.getBoundingClientRect();

    const firstSection = document.querySelector(".first-section");
    if (firstSection === null) return;

    const { height: sectionHeight } = firstSection.getBoundingClientRect();

    const percentageScrolled = latest / (sectionHeight - headerHeight);

    pageScrolled.set(percentageScrolled);
  });

  return (
    <motion.div
      id="new-home-header"
      style={{
        backdropFilter: useMotionTemplate`blur(${backgroundBlur}px)`,
        boxShadow: useMotionTemplate`0px 0px ${boxShadowSpread}px 0px rgb(0 0 0 / 0.1)`,
        backgroundImage: useMotionTemplate`linear-gradient(to top, rgba(0, 39, 44, ${startClrOpacity}), rgba(0, 39, 44, 0.1))`,
      }}
      className="pointer-events-none fixed top-0 z-50 flex h-20 w-full items-center rounded-b-newhome px-5 transition-[background-color]"
    >
      <div className={cn("w-full max-w-7xl mx-auto flex items-center py-2")}>
        <div
          className={cn("w-full max-md:hidden", { "w-0": openNavbar })}
          style={{
            ...{ "--delay": openNavbar ? "0ms" : closingDelayDesktop + "ms" },
            transitionProperty: "width",
            transitionDuration: SLIDING_ANIMATION.duration + "ms",
            transitionDelay: "var(--delay, 0ms)",
          }}
        />

        <Link href="/" passHref>
          <motion.div className="relative h-8 w-32 shrink-0 md:h-10 md:w-56 text-3xl pointer-events-auto text-white">
            {/* <motion.svg
            id="logo"
            fill="#f5f5f5"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="550 350 800 360"
            className="absolute size-full max-md:-left-0.5 max-md:top-0.5 max-md:h-4/5"
          >
            <g>
              <g id="Layer_1">
                <g>
                  <g>
                    <path
                      className="cls-1"
                      d="M1010.95,438.73c-.77-19.77-1.63-39.93-2.56-60.48,4.04.63,7.93,1.17,11.67,1.63,3.74.47,7.47.7,11.21.7s7.47-.23,11.21-.7c3.72-.46,7.63-1.01,11.67-1.63-.94,20.55-1.8,40.71-2.57,60.48-.77,19.78-1.17,39.93-1.17,60.48,0,39.23.15,73.25.47,102.04.3,28.8.62,54.57.94,77.29,22.11,0,43.28-.23,63.51-.7,20.24-.47,42.03-2.25,65.38-5.37-1.56,5.61-2.33,10.27-2.33,14.01,0,3.43.77,7.63,2.33,12.61-14.32-.63-28.64-.93-42.96-.93h-86.17c-13.85,0-28.25.3-43.19.93.92-19.3,1.79-38.91,2.56-58.84.77-19.92,1.17-40.17,1.17-60.71v-80.32c0-20.55-.39-40.7-1.17-60.48Z"
                    />
                    <path
                      className="cls-1"
                      d="M1365.19,567.86c-3.12-5.29-7.72-13-13.78-23.12-6.07-10.11-12.77-21.32-20.08-33.62-7.32-12.29-15.02-25.22-23.12-38.76-8.1-13.55-15.8-26.46-23.11-38.77-7.32-12.29-13.95-23.35-19.85-33.16-5.92-9.81-10.44-17.2-13.54-22.18,4.36.63,8.64,1.17,12.85,1.63,4.19.47,8.48.7,12.83.7s8.64-.23,12.85-.7c4.21-.46,8.48-1.01,12.85-1.63,14.01,27.09,28.25,53.71,42.73,79.86,14.48,26.15,29.81,53.4,46,81.72,7.16-11.21,14.63-23.5,22.41-36.89,7.78-13.38,15.57-27.09,23.36-41.1,7.78-14.01,15.24-28.1,22.41-42.27,7.16-14.16,13.85-27.94,20.08-41.33,7.78,1.56,13.86,2.34,18.22,2.34s10.43-.77,18.22-2.34c-14.95,22.73-28.34,43.28-40.17,61.64-11.83,18.38-22.26,35.03-31.29,49.97-9.03,14.95-16.96,28.42-23.82,40.4-6.84,11.99-12.77,22.81-17.74,32.46,0,11.52.06,23.82.23,36.89.15,13.08.39,25.92.7,38.53.3,12.61.71,24.29,1.17,35.03.47,10.74,1.01,19.38,1.63,25.91-7.16-.63-14.78-.93-22.88-.93s-15.72.3-22.88.93c1.86-16.18,2.95-35.79,3.27-58.84.3-23.04.47-47.17.47-72.39Z"
                    />
                    <path
                      className="cls-1"
                      d="M1664.77,438.73c-.79-19.77-1.63-39.93-2.57-60.48,14.01.63,27.95,1.17,41.79,1.63,13.86.47,27.79.7,41.81.7s28.17-.23,42.49-.7c14.32-.46,29.9-1.01,46.71-1.63-.94,4.67-1.41,9.34-1.41,14.01s.47,9.34,1.41,14.01c-8.41-.93-18.53-1.79-30.35-2.57-11.85-.77-23.91-1.4-36.19-1.86-12.31-.47-24.13-.86-35.5-1.17-11.38-.3-20.79-.46-28.25-.46-.32,10.9-.56,21.33-.71,31.28-.15,9.97-.23,19.93-.23,29.89,0,10.9.08,20.94.23,30.12.15,9.19.24,18.76.24,28.73,20.55,0,40.86-.31,60.95-.94,20.08-.62,39.92-1.87,59.54-3.74-1.25,4.67-1.87,9.34-1.87,14.01s.62,9.34,1.87,14.01c-7.79-.93-16.58-1.63-26.39-2.1-9.81-.46-20.02-.86-30.59-1.17-10.59-.3-21.32-.47-32.22-.47h-31.29v39.7c0,20.55.38,40.79,1.17,60.71.77,19.93,1.63,39.54,2.57,58.84-7.17-.63-14.8-.93-22.89-.93s-15.72.3-22.88.93c.94-19.3,1.79-38.91,2.57-58.84.77-19.92,1.17-40.17,1.17-60.71v-80.32c0-20.55-.39-40.7-1.17-60.48Z"
                    />
                    <path
                      className="cls-1"
                      d="M849.37,666.39c-6.38-14.32-13.54-30.59-21.47-48.8-7.94-18.21-16.43-37.9-25.45-59.08-9.05-21.17-18.07-42.5-27.1-63.98-9.03-21.49-17.9-42.74-26.62-63.75-8.72-21.02-16.81-40.55-24.28-58.61h-8.87c-24.29,55.74-48.41,110.53-72.39,164.39-23.98,53.87-48.56,108.04-73.79,162.52,5.3-.63,11.05-.93,17.28-.93s11.98.3,17.28.93c4.04-14.32,10.12-32.46,18.22-54.4,8.09-21.95,17.12-45.07,27.09-69.35l5.37-12.99c30.48-7.28,58.82-4.39,84.95,9.01,13.47,6.91,25.18,15.5,35.15,25.75.91.93,1.67,1.83,2.53,2.75,1.08,2.65,2.12,5.23,3.23,7.94,4.67,11.36,9.26,22.58,13.77,33.62,4.51,11.05,8.64,21.64,12.38,31.76,3.74,10.12,6.7,18.76,8.88,25.91,4.36-.63,8.48-.93,12.38-.93h24.74c3.89,0,8.02.3,12.38.93-4.04-7.47-9.26-18.36-15.65-32.69ZM659.37,550.94l49.66-115.72,55.13,132.23c-3.53-2.32-7.31-4.54-11.54-6.7-26.44-13.56-61.72-16.32-93.25-9.81Z"
                    />
                  </g>
                  <g>
                    <polygon
                      className="cls-1"
                      points="447.85 510.58 447.85 467.41 266.19 370.81 84.33 467.41 84.33 511.21 266.42 414.49 447.85 510.58"
                    />
                    <polygon
                      className="cls-1"
                      points="447.85 685.84 447.85 642.56 224.97 523.97 266.39 502.11 447.85 598.34 447.85 555.17 266.19 458.46 84.33 555.02 84.33 598.69 183.7 545.97 447.85 685.84"
                    />
                    <polygon
                      className="cls-1"
                      points="266.26 677.1 325.49 708.35 407.62 708.35 183.58 589.54 84.33 642.43 84.33 685.99 183.63 633.35 224.77 655.16 124.68 708.35 207.14 708.35 266.26 677.1"
                    />
                  </g>
                </g>
              </g>
            </g>
          </motion.svg> */}
            NEST
          </motion.div>
        </Link>

        <div className="z-20 w-full">
          <div className="relative isolate  max-md:hidden">
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              onBlur={e => {
                const mainClosingDelay = closingDelayDesktop;
                const additionalClosingDelay = 200;
                const totalClosingDelay =
                  mainClosingDelay + additionalClosingDelay;

                // scaling down delay of the hamburger button
                e.target.style.setProperty(
                  "--closing-delay",
                  totalClosingDelay + "ms"
                );

                setTimeout(
                  () => e.target.style.setProperty("--closing-delay", "0ms"),
                  totalClosingDelay + SLIDING_ANIMATION.duration
                );
              }}
              className={cn(
                "nav-element w-10 h-10 ml-auto bg-white rounded-full grid place-content-center hover:scale-150 transition-transform duration-500 pointer-events-auto",
                { "scale-150": openNavbar }
              )}
              style={{
                ...{ "--closing-delay": "0ms" },
                boxShadow:
                  "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
                transitionDelay: "var(--closing-delay, 0ms)",
              }}
            >
              <AnimatePresence mode="wait">
                {openNavbar ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <XIcon className="pointer-events-none text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MenuIcon className="pointer-events-none text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <nav
              className={cn(
                "nav-element absolute bg-white inset-y-0 right-0 w-10 rounded-full -z-[2] overflow-hidden pointer-events-auto",
                { "w-[min(100%,36rem)]": openNavbar }
              )}
              style={{
                ...{
                  "--delay": openNavbar ? "0ms" : closingDelayDesktop + "ms",
                },
                transitionProperty: "width",
                transitionDuration: SLIDING_ANIMATION.duration + "ms",
                transitionDelay: "var(--delay)",
              }}
            >
              <ul className="mr-[50px] flex h-full items-center justify-evenly gap-2">
                {NAV_LINKS.map(({ id, path }, idx) => (
                  <li key={id} className="relative shrink-0 overflow-hidden">
                    <Link
                      className="isolate font-semibold hover:no-underline text-black"
                      href={path}
                    >
                      <span
                        className={cn(
                          "absolute w-max opacity-0 -translate-y-1",
                          { "opacity-100 -translate-y-0": openNavbar }
                        )}
                        style={{
                          ...{
                            "--prime-delay": openNavbar
                              ? NAVLINK_ANIMATION["prime-delay"] + "ms"
                              : "0ms",
                            "--delay":
                              NAVLINK_ANIMATION["transition-delay"] + "ms",
                          },
                          transitionProperty: "opacity, transform",
                          transitionDuration:
                            NAVLINK_ANIMATION["transition-duration"] + "ms",
                          transitionDelay: `calc(var(--prime-delay) + var(--delay) * ${
                            openNavbar ? idx + 1 : NAV_LINKS.length - (idx + 1)
                          })`,
                        }}
                      >
                        {id}
                      </span>
                      <span className="-z-10 opacity-0">{id}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* overlay */}
            <div
              onClick={() => setOpenNavbar(false)}
              className={cn(
                "fixed w-screen h-screen top-0 left-0 -z-[5] pointer-events-auto",
                {
                  "pointer-events-none hidden": !openNavbar,
                }
              )}
            />
          </div>

          <MobileNavbar />
        </div>
      </div>
    </motion.div>
  );
}
