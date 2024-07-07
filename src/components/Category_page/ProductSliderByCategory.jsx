import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryProductCard from "./CategoryProductCard";
import styles from "@/styles/Styles";

function ProductSliderByCategory({ category }) {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // Get the products
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <div className={`max-w-full pl-10 mt-6`}>
      {/* category name */}
      <div
        className={`flex justify-between ${styles.product_category_container} mt-2 my-4`}
      >
        <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#000000] font-bold">{capitalizeFirstLetter(category)}</p>
        <p
          className="text-[12px] md:text-[16px] lg:text-[20px] text-[#6366F1] cursor-pointer"
          onClick={() => setVisibleProducts(products.length)}
        >
          View more
        </p>
      </div>

      {/* products */}
      <div className="">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mx-auto lg:py-6"
        >
          <CarouselContent className="gap-[-0px]">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2.5 md:basis-1/4 lg:basis-1/4 xl:basis-1/5 border-none"
              >
                <div>
                  <Card className="border-none shadow-none flex">
                    <CategoryProductCard product={product} />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default ProductSliderByCategory;
