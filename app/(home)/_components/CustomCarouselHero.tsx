"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselApi
} from "@/components/ui/carousel";

export function CustomCarouselHero({
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
    <div className="mx-auto w-full space-y-10 relative px-4">
      
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true, direction: "ltr" }}
      >
        <CarouselContent className="h-[40vh] md:h-screen lg:h-screen">{children}</CarouselContent>
        <CarouselPrevious className="start-4 bg-muted/20 border-none" />
        <CarouselNext className="end-4 bg-muted/20 border-none" />

      <div className="flex gap-x-2 justify-center items-center -mt-6 z-40 relative">
        {[...Array(count)].map((item , index) => (
          <div
            key={index}
            className={`h-0.5 lg:h-1 w-6 lg:w-8 rounded text-3xl bg-muted-foreground/50 cursor-pointer ${(index) === (current-1) && "!bg-muted-foreground"}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
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
    </div>
  );
}
