"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
    const keyword = searchRef.current.value.trim(); // Menghapus spasi di awal/akhir
    if (!keyword) {
      alert("Please enter a search keyword!"); // Menampilkan alert jika string kosong
    } else {
      router.push(`/search/${keyword}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Jalankan pencarian ketika tombol Enter ditekan
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="rounded-md text-start w-40 p-1"
        ref={searchRef}
        onKeyDown={handleKeyDown} // Tambahkan event listener untuk Enter
      />
      <button className="absolute top-1 right-1" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
