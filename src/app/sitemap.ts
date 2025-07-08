import { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_BASE_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    { url: `${base}/` },
    { url: `${base}/about` },
    { url: `${base}/contact` },
    { url: `${base}/services` },
    { url: `${base}/work` },
  ];
}
