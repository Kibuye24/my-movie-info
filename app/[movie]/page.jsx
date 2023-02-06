import Image from "next/image";
import axios from "axios";

export default async function Show({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="">
      <div className="mx-4 my-2">
        <a href="/">Back</a>
      </div>
      <div className="container">
        <div className="mt-[50px]">
          <h1 className="text-xl text-center">{res.title}</h1>
        </div>
        <div className="bg-slate-900/50 md:h-[800px] md:w-[750px] rounded-lg mx-auto flex-wrap my-4">
          <div className="py-4 mx-4 flex flex-row">
            <div className="w-full">
              <Image
                src={imagePath + res.backdrop_path}
                width={725}
                height={200}
                alt={res.title + "image"}
              />
            </div>
          </div>
          <div className="mx-4 my-4">
            <div>
              <h2 className="text-3xl text-red-600">{res.title}</h2>
              <p className="py-8 leading-10">{res.overview}</p>
            </div>
          </div>
          <div className="flex flex-wrap flex-row gap-4 items-end mx-4 mt-10">
            <p>
              Rating:{" "}
              <span className="py-2 text-amber-300">
                {res.vote_average.toFixed(1)}
              </span>
            </p>
            <p>Votes: {res.vote_count}</p>
            <p>Languages: {res.original_language}</p>
            <p>Release Date: {res.release_date}</p>
            <p>
              PG:{" "}
              {res.adult == true ? <span>18+</span> : <span>Kid Friendly</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
