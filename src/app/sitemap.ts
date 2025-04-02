import { getJokeTotalKeyword, slugify } from "@/utils/func";
import { MetadataRoute } from "next";

const BASE_URL = 'https://jokes.airizzgenerator.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/terms-of-service`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
    ];

    const dynamicRoutes: MetadataRoute.Sitemap = getJokeTotalKeyword().map((category) => {
        const postSlug = slugify(category)
        return {
            url: `${BASE_URL}/${postSlug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        };
    });

    return [...staticRoutes, ...dynamicRoutes];
}