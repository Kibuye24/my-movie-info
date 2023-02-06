export default function Navbar() {
  return (
    <nav className="bg-slate-900/50 w-full mb-4 py-3 px-[3%] flex flex-row font-semibold">
      <h3 className="text-red-600">
        <a href="/">My Movie Info</a>
      </h3>
      <ul className="flex flex-row space-x-2 absolute right-4">
        <li className="hover:text-red-600 cursor-pointer">
          <a href="/popular">Popular</a>
        </li>
        <li className="hover:text-red-600 cursor-pointer">
          <a href="/upcoming">Upcoming</a>
        </li>
        <li className="hover:text-red-600 cursor-pointer">
          <a href="/top-rated">Top Rated</a>
        </li>
      </ul>
    </nav>
  );
}
