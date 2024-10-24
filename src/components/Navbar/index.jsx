import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="bg-indigo-400 flex justify-between p-4">
      <Link href="/">
        <div className="flex text-2xl font-bold">
          <h1 className="text-white">Wibu</h1>
          <span className="text-black">Tod</span>
        </div>
      </Link>
      <InputSearch />
    </div>
  );
};

export default Navbar;
