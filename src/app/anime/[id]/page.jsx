import VideoPlayer from "@/components/utils/VideoPlayer";
import { getAnimeList, getAnimeVideo } from "@/libs/api-list";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = await params;
  const anime = await getAnimeList(`anime/${id}`);
  // console.log(anime);

  const video = await getAnimeVideo(`anime/${id}/videos`);
  // console.log(video);

  return (
    <>
      {/* title */}
      <div className="mt-5 px-4">
        <h3 className="title text-2xl font-extrabold ">{anime.data.title}</h3>
      </div>
      <div className="p-5">
        {/* Floating image */}
        <Image
          width={250}
          height={300}
          src={anime.data.images.webp.image_url}
          alt={anime.data.title}
          className="md:float-left sm:float-none mr-5 object-cover rounded-lg"
        />
        {/* Anime details */}
        <p className="score">
          Score: <span className="text-yellow-400">{anime.data.score}</span>
        </p>
        <p className="episodes">
          Episodes:{" "}
          <span className="text-yellow-400">{anime.data.episodes}</span>
        </p>
        <p className="type">
          Status: <span className="text-yellow-400">{anime.data.status}</span>
        </p>
        <p className="rating">
          Rating: <span className="text-yellow-400">{anime.data.rating}</span>
        </p>

        {/* Synopsis text wrapping around the floating image */}
        <h3 className="synopsis-title text-xl font-bold mt-5">Synopsis</h3>
        <p className="synopsis text-justify mr-3 mt-3">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.youtube_id} />
      </div>
    </>
  );
};

export default Page;
