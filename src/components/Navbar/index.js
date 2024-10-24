import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-indigo-400 flex justify-between p-4">
      <Link href="/">
        <div className="flex text-2xl font-bold">
          <h1 className="text-white">Wibu</h1>
          <span className="text-black">Tod</span>
        </div>
      </Link>
      <input
        type="text"
        placeholder="Search"
        className="rounded-md text-center"
      />
    </div>
  );
};

export default Navbar;
