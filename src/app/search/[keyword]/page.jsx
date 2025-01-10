import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeList } from "@/libs/api-list";

const Page = async ({ params }) => {
  const { keyword } = await params; // Destructure the keyword from the params
  const keywordDecode = decodeURI(keyword); // Decode the keyword

  // Fetch data from the API using the keyword
  const searchAnime = await getAnimeList("anime", `q=${keywordDecode}`);

  return (
    <>
      <section>
        <Header
          title={`Hasil Pencarian dari ${keywordDecode}`}
          linkTitle="View More"
          linkHref="/populer"
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
