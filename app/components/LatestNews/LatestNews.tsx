import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export async function LatestNews(p:{}){
    const article = await ArticleApi.fetchToday()
    return (
        <>
            <ArticleCard article={article[0]}/>
        </>
    )
}