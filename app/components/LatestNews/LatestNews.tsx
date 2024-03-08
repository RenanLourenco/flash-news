import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { ArticleList } from "../ArticleList/ArticleList";
import Image from "next/image";
import topPng from "@/public/top.png"
import Skeleton from "react-loading-skeleton";

export async function LatestNews(p:{}){
    const article = await ArticleApi.fetchToday()
    return (
        <div>
            <div className="flex items-center space-x-4 mb-16">
                <Image src={topPng} className="h-10 w-10" alt="Latest news icon" />
                <h1>Latest News</h1>
            </div>
            <ArticleList articles={article}/>
        </div>
    )
}

export function LatestNewsSkeleton() {
   return <div>
    <Skeleton height={40} width={218} count={1} className="mb-16"/>
    <div className="grid grid-cols-3 gap-x-8 gap-y-20">
      {Array.from({length:15}).map((i,k) => (
          <div key={k}>
              <Skeleton key={k} height={344} width={320}/>
          </div>
      ))}
    </div>
  </div>
}