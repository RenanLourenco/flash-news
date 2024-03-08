import { Suspense } from "react";
import { CryptoNews, CryptoNewsSkeleton } from "../components/CryptoNews/CryptoNews.server";
import { LatestNews, LatestNewsSkeleton } from "../components/LatestNews/LatestNews";



export default async function IndexPage() {

  return <div className="flex justify-between">
    <Suspense fallback={<LatestNewsSkeleton/>}>
        <LatestNews />
    </Suspense>
    <Suspense fallback={<CryptoNewsSkeleton />}>
      <CryptoNews />
    </Suspense>
  </div>
}
