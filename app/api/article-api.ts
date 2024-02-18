import { Article, ArticleListResponse } from "../types/article-types";

export class ArticleApi {
    static async fetchToday() : Promise<Article[]>{
        return (
            (await (
                await fetch('http://localhost:3090/news')
            ).json()) as ArticleListResponse
        ).results;
    }
}