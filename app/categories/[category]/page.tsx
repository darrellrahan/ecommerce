import CategoryHero from "@/app/components/CategoryHero";
import CategoryProducts from "@/app/components/CategoryProducts";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MobileNavbar from "@/app/components/MobileNavbar";
import React from "react";

function page({ params: { category } }: { params: { category: string } }) {
  return (
    <main>
      <Header />
      <MobileNavbar />
      <div className="px-6 space-y-16 max-w-screen-xl m-auto">
        <CategoryHero category={category} />
        <CategoryProducts category={category} />
      </div>
      <Footer />
    </main>
  );
}

export default page;
