import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section id="banner">
      <div className="grid grid-cols-1">
        <div className="bg-[#f3f3f3] p-8 flex flex-col gap-6 items-baseline">
          <h1 className="text-2xl font-bold">Creative harmonious living</h1>
          <p className="text-lg">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <Link
            href="/"
            className="bg-black text-white py-2 px-4 text-lg font-bold border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 ease-linear"
          >
            SHOP NOW
          </Link>
        </div>
        <div>
          <Image
            src="/images/banner/img-1.jpg"
            alt="banner"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
