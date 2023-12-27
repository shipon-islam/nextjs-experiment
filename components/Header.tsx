import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-pink-100 py-2">
      <nav className="container flex justify-between">
        <div>
          <h1 className="capitalize font-black text-2xl text-red-600 font-sans">
            experiment
          </h1>
        </div>
        <div className="space-x-8 font-medium ">
          <Link
            className="capitalize text-gray-600 hover:text-red-500"
            href="/"
          >
            home
          </Link>
          <Link
            className="capitalize text-gray-600 hover:text-red-500"
            href="/posts"
          >
            Posts
          </Link>
          <Link
            className="capitalize text-gray-600 hover:text-red-500"
            href="/todos"
          >
            Todos
          </Link>
          <Link
            className="capitalize text-gray-600 hover:text-red-500"
            href="/about"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
