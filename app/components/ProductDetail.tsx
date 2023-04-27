"use client";

import Image from "next/image";
import React, { useState } from "react";

function ProductDetail({
  images,
  name,
  description,
  price,
  texture,
  weight,
  size,
}: {
  images: {
    id: number;
    src: string;
  }[];
  name: string;
  description: string;
  price: number;
  texture: string;
  weight: string;
  size: string;
}) {
  const [amount, setAmount] = useState(1);
  const [bigImage, setBigImage] = useState(images[0].src);

  return (
    <section id="product-detail">
      <div className="mt-36 space-y-16">
        <div className="space-y-4">
          <div className="w-80 h-80 m-auto">
            <Image
              src={bigImage}
              alt={name}
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-center gap-4">
            {images.map((data) => (
              <button
                key={data.id}
                onClick={() => setBigImage(data.src)}
                className={`w-16 h-16 border-4 rounded ${
                  bigImage === data.src ? "border-black" : "border-[#e5e5e5]"
                }`}
              >
                <Image
                  src={data.src}
                  alt={name}
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="p-6 bg-[#e5e5e5] space-y-8">
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
          </div>
          <div>
            <p className="text-lg">{description}</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div>
              <p className="font-semibold text-2xl">Quantity</p>
            </div>
            <div className="flex justify-center text-3xl font-semibold">
              <button
                onClick={() => (amount > 1 ? setAmount(amount - 1) : null)}
                className="bg-white w-14 h-14 flex items-center justify-center border-t border-l border-b border-black hover:bg-transparent transition-all duration-300 ease-linear"
              >
                -
              </button>
              <p className="w-14 h-14 flex items-center justify-center border border-black text-center">
                {amount}
              </p>
              <button
                onClick={() => setAmount(amount + 1)}
                className="bg-white w-14 h-14 flex items-center justify-center border-t border-r border-b border-black hover:bg-transparent transition-all duration-300 ease-linear"
              >
                +
              </button>
            </div>
            <div>
              <p className="font-semibold text-2xl">${price}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 font-semibold text-xl">
            <button className="border-2 border-black p-3 transition-all duration-300 ease-linear hover:bg-black hover:text-white">
              ADD TO CART
            </button>
            <button className="border-2 border-[#b6002c] bg-[#b6002c] text-white p-3 transition-all duration-300 ease-linear hover:bg-transparent hover:text-[#b6002c]">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-[#e5e5e5] p-4">
            <h1 className="text-[1.35rem] font-semibold">Texture:</h1>
            <p className="text-lg">{texture}</p>
          </div>
          <div className="bg-[#e5e5e5] p-4">
            <h1 className="text-[1.35rem] font-semibold">Weight:</h1>
            <p className="text-lg">{weight}</p>
          </div>
          <div className="bg-[#e5e5e5] p-4">
            <h1 className="text-[1.35rem] font-semibold">Size:</h1>
            <p className="text-lg">{size}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
