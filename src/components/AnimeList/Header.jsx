import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center px-4 py-0 mt-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link
        href={linkHref}
        className="md:text-lg text-sm hover:text-color-hover underline transition-all p-2 rounded-md"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
