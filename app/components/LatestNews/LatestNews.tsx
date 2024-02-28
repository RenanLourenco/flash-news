import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { ArticleList } from "../ArticleList/ArticleList";
import Image from "next/image";
import topPng from "@/public/top.png"

export async function LatestNews(p:{}){
    const article = await ArticleApi.fetchToday()
    return (
        <>
            <div className="flex items-center space-x-4 mb-16">
                <Image src={topPng} className="h-10 w-10" alt="Latest news icon" />
                <h1>Latest News</h1>
            </div>
            <ArticleList articles={article}/>
        </>
    )
}