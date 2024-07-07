import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function CategoryProductCard({ product }) {
  return (
    <div className="w-[120px] md:w-[230px] lg:w-[347px]">
      <img
        src={product.images[0]}
        alt="Img title"
        className="w-full h-[110px] lg:h-[225px] rounded-[14px] lg:rounded-[16px] object-cover"
      />
      {/* <div className="text-center">
        <div className="text-[14px] md:text-[24px] text-blue-600">
          {product.title.slice(0, 15)}
        </div>
        <div className="flex flex-col items-center mt-2">
          <div className="flex justify-between text-center md:w-auto">
            <p className="text-[8px] md:text-[16px] text-right">
              Wholesale Price:
            </p>
            <p className="text-[8px] md:text-[16px] ml-2 font-bold">620 Tk</p>
          </div>
          <div className="flex justify-between text-center md:w-auto mt-1 md:mt-0">
            <p className="text-[8px] md:text-[16px] text-right">
              Retail Price:
            </p>
            <p className="text-[8px] md:text-[16px] ml-2 font-bold">800 Tk</p>
          </div>
        </div>
      </div> */}

      <div className="text-center">
        <div className="text-[14px] md:text-[24px] text-blue-600">
          {product.title.slice(0, 15)}
        </div>
        <div className="flex flex-col md:justify-between mt-2">
          <div className="flex justify-between text-center md:w-auto lg:px-4 xl:px-6 2xl:px-10">
            <p className="text-[8px] md:text-[16px] ">Wholesale Price:</p>
            <p className="text-[8px] md:text-[16px] ml-2 font-bold">620 Tk</p>
          </div>
          <div className="flex justify-between text-center md:w-auto mt-1 md:mt-0 lg:px-4 xl:px-6 2xl:px-10">
            <p className="text-[8px] md:text-[16px]">Retail Price:</p>
            <p className="text-[8px] md:text-[16px] ml-2 font-bold">800 Tk</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductCard;
