import { CaretCircleLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl text-gray-800 mt-4">Page Not Found</p>
      <div className="mt-6 text-color-secondary hover:text-color-hover">
        <Link href="/">
          <button className="flex items-center gap-2">
            <CaretCircleLeft size={24} />
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
