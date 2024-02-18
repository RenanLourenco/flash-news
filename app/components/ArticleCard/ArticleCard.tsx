import { Article } from "@/app/types/article-types";
import Image from "next/image";
import Link from "next/link";
import defaultNewsPng from "@/public/default-news.png"
import { CATEGORIES_ITEMS } from "../Nav/constant";

export function ArticleCard( p: { article: Article }){
    return <Link href='#' className=" space-y-4 block w-80 hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 py-4 pb-4 px-6 rounded-xl shadow-sm">
        {/* Header */}
        <div className="capitalize">
            {/* Icon and category */}
            <div className="flex items-center gap-2">
                <div className="flex w-10 h-10 justify-center items-center border border-slate rounded-full">
                    <Image className="w-5 h-5" src={CATEGORIES_ITEMS[p.article.category[0]].src} alt="Image for category"/>
                </div>
                <div className="font-bold text-md">{p.article.category}</div>
            </div>
            {/* Date */}
            <div className="mt-2 text-sm text-gray-400">Published: {new Date(p.article.pubDate).toDateString()}</div>
        </div>
        
        {/* Body */}
        <div>
            {/* Title */}
            <div className="font-semibold text-xl line-clamp-2 h-14">{p.article.title}</div>
            {/* Article Image */}
            <Image className="h-40" height={200} width={300} src={p.article.image_url || defaultNewsPng} alt="Image for article"/>
        </div>
    </Link>
}