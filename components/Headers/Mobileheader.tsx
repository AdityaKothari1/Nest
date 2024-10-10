import { cn } from "@/utils/cn";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "./Header";
import { MenuIcon, XIcon } from "lucide-react";

const navVariants: Variants = {
  close: {
    width: "40px",
    height: "40px",
    top: "0px",
    right: "0px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    transition: { delay: 0.4, duration: 0.3 },
  },
  open: {
    width: "65vw",
    height: "55vh",
    top: "-20px",
    right: "-20px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "0px",
    transition: { duration: 0.3 },
  },
};

const navLinkVariants: Variants = {
  close: idx => ({
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.1,
      delay: 0.05 * (NAV_LINKS.length - idx),
    },
  }),
  open: idx => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.3 + 0.05 * idx,
    },
  }),
};

export function MobileNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body === null) return;

    if (openNav) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [openNav]);

  return (
    <div className="md:hidden isolate">
      <div className="relative w-fit ml-auto isolate">
        <button
          onClick={() => setOpenNav(!openNav)}
          className={cn(
            "w-10 h-10 relative overflow-hidden bg-white  rounded-full grid place-content-center pointer-events-auto transition-transform duration-300 after:absolute after:inset-[1.5px] after:bg-[#fefefe] after:rounded-full after:-z-10 before:absolute before:inset-0 before:-z-10 before:bg-[conic-gradient(transparent_270deg,var(--clr-accent))] before:animate-spin before:duration-2s",
            {
              "scale-120 transition-[transform] duration-300 before:opacity-100":
                openNav,
              "delay-400 before:opacity-0": !openNav,
            }
          )}
          style={{
            boxShadow:
              "0 1px 3px 1px rgb(0 0 0 / 0.1), 0 1px 2px 0px rgb(0 0 0 / 0.1)",
          }}
        >
          <AnimatePresence mode="wait">
            {openNav ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <XIcon className="pointer-events-none text-sm" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <MenuIcon className="pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {openNav && (
            <motion.nav
              layout
              variants={navVariants}
              initial="close"
              animate={openNav ? "open" : "close"}
              exit="close"
              className="absolute -z-10 bg-white pointer-events-auto"
            >
              <ul className="h-full flex flex-col gap-2 justify-center px-5">
                {NAV_LINKS.map(({ id, path }, idx) => (
                  <li key={id} className="shrink-0 relative overflow-hidden">
                    <Link
                      className="hover:no-underline isolate font-bold text-2xl text-primary"
                      href={path}
                    >
                      <motion.span
                        custom={idx + 1}
                        variants={navLinkVariants}
                        initial="close"
                        animate={openNav ? "open" : "close"}
                        exit="close"
                        className="absolute w-max opacity-0"
                      >
                        {id}
                      </motion.span>
                      <span className="opacity-0 -z-10">{id}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <div
        onClick={() => setOpenNav(false)}
        className={cn(
          // TODO: FIX the ISSUE of - backdrop blur not showing
          "fixed left-0 top-0 w-screen h-screen backdrop-blur-md -z-[1] opacity-0 transition-opacity duration-300",
          {
            "pointer-events-none delay-400": !openNav,
            "opacity-100 pointer-events-auto": openNav,
          }
        )}
      />
    </div>
  );
}
