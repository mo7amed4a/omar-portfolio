import * as React from "react"

import {
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { CustomCarouselHero } from "./CustomCarouselHero"

export default function Hero() {
  return ( 
    <CustomCarouselHero>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <Image src="/slider/7-copy.webp" alt="Hero" width={3000} height={3000} className="object-cover size-full" />
          </CarouselItem>    
        ))}
    </CustomCarouselHero>
  )
}
