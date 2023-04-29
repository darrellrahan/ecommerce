"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { RiShoppingCartLine, RiMenu3Fill } from "react-icons/ri";
import { useTogglerContext } from "../context/toggler";
import { useCartContext } from "../context/cart";
import { categories } from "../data/data";

function Header() {
  const { setMobileNavbar, setCartOpen } = useTogglerContext();
  const { cart } = useCartContext();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onPageScroll = () => {
      headerRef.current!.style.height =
        window.pageYOffset > 20 ? "5rem" : "7.5rem";
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 bg-white z-50 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,.15)] flex items-center transition-all duration-300 ease-linear h-[7.5rem]"
      ref={headerRef}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl w-full m-auto">
        <div>
          <Link href="/">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={120}
              height={48}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          {categories.map((data) =>
            data.category === "All" ? null : (
              <Link
                key={data.id}
                href={data.url}
                className="uppercase text-lg hover:underline hidden lg:inline-block"
              >
                {data.category}
              </Link>
            )
          )}
          <div className="relative">
            <button onClick={() => setCartOpen(true)}>
              <RiShoppingCartLine />
            </button>
            {cart.length > 0 ? (
              <span className="absolute -top-3 z-50 -right-1 bg-[#b6002c] w-5 h-5 rounded-full text-white flex items-center justify-center text-[0.95rem]">
                {cart.length}
              </span>
            ) : null}
          </div>
          <div className="lg:hidden">
            <button onClick={() => setMobileNavbar(true)}>
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
