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
          <div>
            <Image
              src={bigImage}
              alt={name}
              width={400}
              height={400}
              className="m-auto"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            {images.map((data) => (
              <button key={data.id} onClick={() => setBigImage(data.src)}>
                <Image
                  src={data.src}
                  alt={name}
                  width={80}
                  height={80}
                  className="m-auto"
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
