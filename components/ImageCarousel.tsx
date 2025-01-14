'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from '@/icons'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Socials from "@/components/Socials";

interface ImageSlide {
    src: string
    alt: string
}

interface FullscreenImageCarouselProps {
    images: ImageSlide[]
    autoplayInterval?: number
}

export function ImageCarousel({ images }: FullscreenImageCarouselProps) {
    const [api, setApi] = React.useState<any>()

    return (
        <Carousel
            setApi={setApi}
            className="w-full h-screen relative"
            plugins={[
                Autoplay({delay: 5000,}),
                Fade({active:true})
            ]}
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className={"h-screen"}>
                            <img src={image.src} alt={image.alt} className={"w-full h-full object-cover object-right-top md:object-center"}/>
                        </div>

                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    className={"p-2 hover:scale-105"}
                    onClick={() => api?.scrollPrev({ loop: true })}
                >
                    <ChevronLeft/>
                </button>
                <button
                    className={"p-2 hover:scale-105"}
                    onClick={() => api?.scrollNext({ loop: true })}
                >
                    <ChevronRight/>
                </button>
            </div>
            <Socials/>
        </Carousel>
    )
}

