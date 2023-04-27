import Cart from "@/app/components/Cart";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MobileNavbar from "@/app/components/MobileNavbar";
import ProductDetail from "@/app/components/ProductDetail";
import Trending from "@/app/components/Trending";
import { products } from "@/app/data/data";
import React from "react";

function page({ params: { id } }: { params: { id: string } }) {
  const productDetail = products.find((data) => data.id === id);

  if (!productDetail) return null;

  return (
    <main>
      <Header />
      <MobileNavbar />
      <Cart />
      <div className="px-6 space-y-16 max-w-screen-xl m-auto">
        <ProductDetail
          images={productDetail.img.details}
          name={productDetail.name}
          description={productDetail.description}
          price={productDetail.price}
          texture={productDetail.texture}
          weight={productDetail.weight}
          size={productDetail.size}
        />
        <Trending />
      </div>
      <Footer />
    </main>
  );
}

export default page;
