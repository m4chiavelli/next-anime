import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import ScrollToTop from "@/components/utils/ScrollTo";
import { SessionProvider } from "next-auth/react";
import {
  getAnimeList,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-list";

const Page = async () => {
  // #1 - Fetch top anime list
  const topAnime = await getAnimeList("top/anime", "limit=10");

  // #2 - Fetch random anime
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 10);

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="View More" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi For You" linkHref={"/recommended"} />
        <AnimeList api={recommendedAnime} />
      </section>
      <ScrollToTop />
      <footer>
        <p className="text-center text-gray-400 text-sm">
          © 2023 - 2024 Anime List. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Page;
