import Image from "next/image";
import Link from "next/link";

// Komponen untuk menampilkan daftar anime
const AnimeList = ({ api }) => {
  // Pastikan api.data tersedia sebelum melakukan map
  if (!api || !api.data) {
    return <p>Loading...</p>; // Tampilkan pesan loading saat data belum ada
  }

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime, index) => {
        // Fungsi untuk membatasi judul anime hingga 12 karakter
        const shortTitle =
          anime.title.length > 20
            ? anime.title.slice(0, 20) + "..."
            : anime.title;

        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="group relative cursor-pointer transition-all"
            key={index}
          >
            <div className="relative overflow-hidden border-2 border-indigo-600 rounded-2xl">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
              />
              <h3 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-bold md:text-xl text-md p-2 transition-all group-hover:text-2xl">
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
