import Image from "next/image";
import React from "react";

export function Banners() {
  return (
    <main>
      <div className="my-10 relative w-full h-[400px]">
        <Image
          className="object-cover"
          src="/assets/herobanner/Banner-3.png"
          blurDataURL="/assets/herobanner/Banner-3.png"
          fill
          alt=""
        />
      </div>
    </main>
  );
}
