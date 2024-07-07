import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CategorySlider() {
  return (
    <div className="max-w-[290px] md:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1507px] h-[85px] md:h-[260px] bg-[#ffffff] drop-shadow-md rounded-lg m-auto lg:px-24 mt-6 flex justify-center flex-col text-center relative gap-0">
      <h3 className="mb-4 hidden md:block md:text-xl lg:text-2xl font-bold text-[#6366F1]">
        Categories
      </h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mx-auto px-6 md:px-14 lg:px-0 lg:py-6"
      >
        <CarouselContent className="gap-[-0px]">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 md:basis-1/6 lg:basis-1/8 border-none"
            >
              <div>
                <Card className="border-none shadow-none">
                  <CardContent className="flex items-center justify-center p-0 md:p-[-25px] lg:p-2  border-none">
                    <img
                      src={
                        "https://images.pexels.com/photos/11823090/pexels-photo-11823090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt=""
                      className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]  lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]  rounded-full"
                    />
                  </CardContent>
                  <p>Prod{index}</p>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" absolute left-[-20px] lg:left-[-60px] border-[#6366F1]  " />
        <CarouselNext className=" absolute right-[-20px] lg:right-[-60px] border-[#6366F1]" />
      </Carousel>
    </div>
  );
}

export default CategorySlider;
