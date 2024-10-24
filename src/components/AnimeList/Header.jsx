import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Link
        href={linkHref}
        className="md:text-lg text-sm underline hover:bg-indigo-400 transition-all p-2 rounded-md"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
