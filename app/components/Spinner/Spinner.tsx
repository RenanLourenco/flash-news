import lightningPng from "@/public/lightning.png"
import Image from "next/image"

export default function Spinner(p: {}) {
    return (
        <div className="flex flex-col items-center">
            <Image src={lightningPng} alt="Spinner" className="w-10 animate-spin mb-4" />
            <div>Loading...</div>
        </div>
    )
}