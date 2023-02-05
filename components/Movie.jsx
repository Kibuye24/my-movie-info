import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, release_date, poster_path, id }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="bg-slate-900/50 w-96 p-4 my-4 rounded-lg justify-evenly leading-loose">
      <Image
        src={imagePath + poster_path}
        width={450}
        height={500}
        alt={title + "image"}
      />
      <h1>{title}</h1>
      <p>{release_date}</p>
      <Link href={`${id}`}>
        <button className="bg-emerald-400 w-full py-2 my-2  rounded-lg">
          Read More...
        </button>
      </Link>
    </div>
  );
}
