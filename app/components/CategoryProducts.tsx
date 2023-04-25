import React from "react";
import { products } from "../data/data";
import ItemCard from "./ItemCard";

function CategoryProducts({ category }: { category: string }) {
  return (
    <section id="category-products">
      <div className="grid grid-cols-[1fr] gap-4">
        {category !== "all"
          ? products
              .filter((data) => data.category === category)
              .map((data) => (
                <ItemCard
                  key={data.id}
                  img={data.img.display}
                  name={data.name}
                  price={data.price}
                />
              ))
          : products.map((data) => (
              <ItemCard
                key={data.id}
                img={data.img.display}
                name={data.name}
                price={data.price}
              />
            ))}
      </div>
    </section>
  );
}

export default CategoryProducts;