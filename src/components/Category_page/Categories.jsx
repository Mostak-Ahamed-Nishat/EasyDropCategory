import React, { useEffect, useState } from "react";
import ProductSliderByCategory from "./ProductSliderByCategory";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category-list`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      {categories.map((category, index) => (
        <ProductSliderByCategory key={index} category={category} />
      ))}
    </div>
  );
}

export default Categories;
