import React from "react";
import { heroGrid } from "../data/content";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
  return (
    <section id="hero">
      <div className="px-6 h-screen flex items-center relative">
        <Link
          href="/"
          className="absolute bottom-8 inset-x-1/2 animate-bounce text-3xl"
        >
          <IoIosArrowDown />
        </Link>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
          {heroGrid.map((data) => (
            <Link href={data.url} key={data.id} className="relative">
              <Image
                src={`/images/hero/img-${data.id}.jpg`}
                alt={data.text}
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-[50%_50%]"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,.327)] hover:bg-[rgba(0,0,0,.521)] transition-all duration-300 ease-linear flex items-end p-4 z-10">
                <h1 className="text-white text-xl font-bold">{data.text}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
