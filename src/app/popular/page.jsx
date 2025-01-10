"use client";

import Banner from "@/components/utils/Banner";
import Pagination from "@/components/utils/Pagination";
import AnimeList from "@/components/AnimeList"; // Assuming AnimeList is imported from components
import ScrollToTop from "@/components/utils/ScrollTo";
import Loading from "../loading";
import { useState, useEffect } from "react";
import { getAnimeList } from "@/libs/api-list";

const Page = () => {
  const [page, setPage] = useState(1); // state for current page
  const [topAnime, setTopAnime] = useState([]); // state for the top anime data
  const [loading, setLoading] = useState(true); // state to handle loading

  // Fetch data from the API and set the top anime state
  // This function is called when the page changes
  const fetchData = async () => {
    try {
      const popularAnime = await getAnimeList("top/anime", `page=${page}`);
      setTopAnime(popularAnime);

      // {const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
      // );
      // const data = await response.json();
      // setTopAnime(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  useEffect(() => {
    setLoading(true); // Start loading when page changes
    fetchData();
  }, [page]); // Re-run effect when page changes

  return (
    <>
      <Banner title={"List All Popular Anime"} />
      {loading ? (
        <div>
          <Loading />
        </div> // Show a loading message while data is being fetched
      ) : (
        <AnimeList api={topAnime} /> // Show the anime list after data is fetched
      )}
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
      <div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Page;
