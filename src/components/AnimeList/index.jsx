import Image from "next/image";
import Link from "next/link";

// Komponen untuk menampilkan daftar anime
const AnimeList = ({ api }) => {
  // Pastikan api.data tersedia sebelum melakukan map
  if (!api || !api.data) {
    return <p>Loading...</p>; // Tampilkan pesan loading saat data belum ada
  }

  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 px-4 py-2">
      {api.data?.map((anime, index) => {
        // Fungsi untuk membatasi judul anime hingga 12 karakter
        const shortTitle =
          anime.title.length > 15
            ? anime.title.slice(0, 15) + "..."
            : anime.title;

        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="group relative cursor-pointer transition-all"
            key={index}
          >
            <div className="relative overflow-hidden border-2 border-color-primary rounded-2xl transition-all duration-300 ease-in-out group-hover:border-color-hover">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
                className="w-full aspect-[3/4] object-cover rounded"
              />

              <h3 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-bold md:text-xl text-md p-2">
                {shortTitle}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
