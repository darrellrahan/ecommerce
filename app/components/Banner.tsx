import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner({
  imgFirst,
  title,
  content,
  img,
}: {
  imgFirst?: boolean;
  title: string;
  content: string;
  img: string;
}) {
  return (
    <section id="banner">
      <div className="grid grid-cols-1">
        <div
          className={`bg-[#e5e5e5] p-8 flex flex-col gap-6 items-baseline ${
            imgFirst ? "order-last" : ""
          }`}
        >
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-lg">{content}</p>
          <Link
            href="/categories/all"
            className="bg-black text-white py-2 px-4 text-lg font-semibold border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 ease-linear"
          >
            SHOP NOW
          </Link>
        </div>
        <div>
          <Image
            src={img}
            alt="banner"
            width={1500}
            height={1500}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
