"use server";
import { getSdk } from "@/sdk";
import { ArticleList } from "../ArticleGroupPage/api";
import { IContentDataFragment, IContentInfoFragment } from "@/gql/graphql";

export async function searchArticles(searchTerm: string = '', pageSize: number = 10, skip: number = 0): Promise<ArticleList> {
    const sdk = getSdk();
    const response = await sdk.searchArticles({ searchTerm, pageSize, skip });
    const total = response?.ArticlePage?.total ?? 0;
    const items = (response?.ArticlePage?.items || []).map(article => {
        if (!article) return undefined;
        return {
            key: ((article as IContentDataFragment)._metadata as IContentInfoFragment).key || '',
            link: ((article as IContentDataFragment)._metadata as IContentInfoFragment).url || undefined,
            title: article.articleTitle || '',
            image: article.articleHeroImage || undefined,
            intro: article.articleSummary?.html || undefined,
            body: article.articleBody?.html || undefined,
            published: article._metadata?.published ? new Date(article._metadata?.published) : new Date()
        };
    }).filter(isNotNullOrUndefined);

    return {
        total: total,
        items: items
    }
}

function isNotNullOrUndefined<T>(input: T | undefined | null) : input is T
{
    return input ? true : false
}