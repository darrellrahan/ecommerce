"use client";

import Link from "next/link";
import React from "react";
import { categories } from "../data/data";
import { usePathname } from "next/navigation";

function CategoryHero({ category }: { category: string }) {
  return (
    <section id="category-hero">
      <div className="mt-36 space-y-8">
        <div
          className={`flex items-center ${
            category === "all" || category === "lamp" || category === "chair"
              ? "gap-24"
              : "gap-16"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <span>{"<"}</span>
            <span>Home</span>
          </Link>
          <h1 className="uppercase font-bold text-[1.75rem]">{category}</h1>
        </div>
        <div className="flex justify-center gap-2 items-center flex-wrap">
          {categories.map((data) => (
            <Link
              href={data.url}
              key={data.id}
              className={`border-2 border-[rgba(0,0,0,.205)] py-1 px-4 ${
                usePathname() === data.url
                  ? "bg-black border-black text-white"
                  : ""
              }`}
            >
              {data.category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;
