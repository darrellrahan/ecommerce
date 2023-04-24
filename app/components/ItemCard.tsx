import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemCard({
  img,
  name,
  price,
  slider,
}: {
  img: string;
  name: string;
  price: number;
  slider?: boolean;
}) {
  return (
    <div className={slider ? "flex-none w-56" : ""}>
      <Link
        href="/"
        className={`border-2 border-[rgba(0,0,0,.205)] hover:border-black transition-all duration-300 ease-linear flex flex-col ${
          slider ? "gap-0" : "gap-8"
        }`}
      >
        <div>
          <Image
            src={img}
            alt={name}
            width={900}
            height={900}
            className="m-auto"
          />
        </div>
        <div className="m-4 space-y-2">
          <h3 className="font-medium text-lg overflow-hidden text-ellipsis">
            {name}
          </h3>
          <h1 className="font-bold text-xl">${price}</h1>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
