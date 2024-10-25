import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="bg-color-secondary flex justify-between p-4">
      <Link href="/">
        <div className="flex">
          <h1 className=" text-3xl font-bold text-black hover:text-white">
            NEXTME
          </h1>
        </div>
      </Link>
      <InputSearch />
    </div>
  );
};

export default Navbar;
