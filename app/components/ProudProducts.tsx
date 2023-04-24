import React from "react";
import { products } from "../data/data";
import Image from "next/image";
import Link from "next/link";

function Proud() {
  return (
    <section id="proud">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">Products we are proud of</h1>
        <div className="grid grid-cols-[1fr] gap-4">
          {products
            .filter((data) => data.proud)
            .map((data) => (
              <Link
                href="/"
                key={data.id}
                className="border-2 border-[rgba(0,0,0,.205)] hover:border-black transition-all duration-300 ease-linear flex flex-col gap-8"
              >
                <div>
                  <Image
                    src={data.img.display}
                    alt={data.name}
                    width={900}
                    height={900}
                    className="m-auto"
                  />
                </div>
                <div className="m-4 space-y-2">
                  <h3 className="font-medium text-lg">{data.name}</h3>
                  <h1 className="font-bold text-xl">${data.price}</h1>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Proud;
