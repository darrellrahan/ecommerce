"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useTogglerContext } from "../context/toggler";
import Link from "next/link";
import { categories } from "../data/data";

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglerContext();

  return (
    <nav
      className={`fixed inset-y-0 right-0 bg-[#f3f3f3] ${
        mobileNavbar ? "left-0" : "left-[150%]"
      } z-50 transition-all duration-300 ease-linear p-8 flex items-center justify-center flex-col`}
    >
      <button
        className="text-3xl absolute top-10 right-10 hover:text-custom-orange transition-all duration-300 ease-linear"
        onClick={() => setMobileNavbar(false)}
      >
        <AiOutlineClose />
      </button>
      <ul className="flex flex-col items-center gap-8 font-medium text-2xl">
        {categories.map((data) => (
          <li key={data.id}>
            <Link
              href={data.url}
              onClick={() => {
                setMobileNavbar(false);
              }}
              className="uppercase"
            >
              {data.category === "All" ? "categories" : data.category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavbar;
