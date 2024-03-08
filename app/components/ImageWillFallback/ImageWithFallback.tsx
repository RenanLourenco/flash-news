"use client"

import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

export function ImageWillFallBack({fallback, src , ...p}: ImageProps & {fallback: StaticImageData}) {
    const [imgSrc, setImgSrc] = useState(src)
    return <Image {...p} src={imgSrc} alt="Fallback image" onError={() => {
        setImgSrc(fallback)
    }}>

    </Image>
}