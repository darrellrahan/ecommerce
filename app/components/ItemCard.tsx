import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard({
  img,
  name,
  price,
  slider,
  url,
}: {
  img: string;
  name: string;
  price: number;
  slider?: boolean;
  url: string;
}) {
  return (
    <div className={slider ? "flex-none max-w-[15.75rem]" : ""}>
      <Link
        href={url}
        className={`border-2 border-[rgba(0,0,0,.205)] hover:border-black transition-all duration-300 ease-linear flex flex-col ${
          slider ? "gap-0 h-full justify-between" : "gap-8"
        }`}
      >
        <div>
          <Image
            src={img}
            alt={name}
            width={1000}
            height={1000}
            className={`m-auto ${slider ? "" : ""}`}
          />
        </div>
        <div className="m-4 space-y-2">
          <h3 className="font-medium text-lg">{name}</h3>
          <h1 className="font-semibold text-xl">${price}</h1>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
