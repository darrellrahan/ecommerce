"use client";

import Image from "next/image";
import React, { useState } from "react";

function ProductDetail({
  images,
  name,
}: {
  images: {
    id: number;
    src: string;
  }[];
  name: string;
}) {
  const [bigImage, setBigImage] = useState(images[0].src);

  return (
    <section id="product-detail">
      <div className="mt-36 space-y-8">
        <div className="space-y-4">
          <div className="w-72 h-72 m-auto">
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
                className="w-16 h-16"
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
      </div>
    </section>
  );
}

export default ProductDetail;
