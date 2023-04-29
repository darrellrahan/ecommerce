import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-[#191919] py-16 px-20 flex items-center justify-center">
        <div className="w-full space-y-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Newsletter
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-center gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="text-lg text-center px-1 py-1 lg:px-2 lg:text-left lg:w-60"
            />
            <button className="bg-[#e5e5e5] text-lg px-1 py-1 lg:px-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black p-8 flex justify-center flex-wrap gap-6 text-white text-lg">
        <Link href="/" className="hover:underline">
          About
        </Link>
        <Link href="/" className="hover:underline">
          Store Location
        </Link>
        <Link href="/" className="hover:underline">
          FAQs
        </Link>
        <Link href="/" className="hover:underline">
          News
        </Link>
        <Link href="/" className="hover:underline">
          Careers
        </Link>
        <Link href="/" className="hover:underline">
          Contact Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
