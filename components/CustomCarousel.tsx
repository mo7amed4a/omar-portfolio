"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselApi
} from "./ui/carousel";

export function CustomCarousel({
  children,
}:{
  children: React.ReactNode;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="mx-auto w-full space-y-10 relative">
      
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true, direction: "ltr" }}
      >
        <CarouselContent className="w-full">
          {children}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>

      {/* <div className="py-2 flex justify-between text-center text-sm">
        <div className="flex justify-center items-center gap-x-2">
          <Button
            onClick={() => handleDotClick(count)}
            size="icon"
            className="bg-transparent shadow-none"
          >
            <ChevronLeft className="!size-6 text-accent-foreground" />
          </Button>
          <div>
          <span className="text-accent-foreground">{current}</span> / <span className="text-muted-foreground">{count}</span>
          </div>
          <Button
            onClick={() => handleDotClick(current + count)}
            size="icon"
            className="bg-transparent shadow-none"
          >
            <ChevronRight className="!size-6 text-accent-foreground" />
          </Button>
        </div>
      </div> */}
      <div className="flex gap-x-4 justify-start items-center">
      {[...Array(count)].map((item , index) => (
        <div
          key={index}
          className={`size-2 rounded-full text-3xl bg-muted-foreground/50 cursor-pointer ${(index) === (current-1) && "!bg-primary"}`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
      </div>
    </div>
  );
}
