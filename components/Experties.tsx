import { MoveRight } from "lucide-react";
import React from "react";

export function Experties() {
  return (
    <main className="max-w-7xl mx-auto my-10 space-y-5 max-md:px-5">
      <h3 className="text-2xl font-poppins font-medium">Our Experties</h3>

      <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-x-10">
        <h3 className="text-3xl font-poppins w-full max-w-96">
          FROM CONCEPT TO CREATION
        </h3>
        <div className="flex flex-col gap-y-5">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            suscipit nihil facilis aliquid minus nam necessitatibus, debitis
            reprehenderit officia veritatis illum ex doloremque dicta! Earum
            quidem reprehenderit culpa quibusdam ipsum?
          </p>
          <div className="font-medium flex items-center gap-x-10">
            <button>contact us</button>
            <MoveRight className="text-sm" />
          </div>
        </div>
      </div>
    </main>
  );
}
