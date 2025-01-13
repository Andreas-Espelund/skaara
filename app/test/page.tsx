import {ImageCarousel} from "@/components/ImageCarousel";

export default function page(){
    const images =
        [
            {
                src: "/images/carousel/interior_model.jpg",
                alt: 'image',
            },
            {
                src: "/images/carousel/drone.jpeg",
                alt: 'image',
            },
            {
                src: "/images/carousel/service.jpg",
                alt: 'image',
            },
        ]

    return (
        <ImageCarousel images={images}/>
    )
}