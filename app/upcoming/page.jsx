// "use client";
// import { useState } from "react";
import Movie from "@/components/Movie";

export default async function Upcoming() {
  //   const [currentpage, setCurrentPage] = useState(1);

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  //   function nextPage(currentPage) {
  //     setCurrentPage(currentPage + 1);
  //   }

  return (
    <div>
      <h1 className="text-center text-3xl">Upcoming Movies</h1>
      <div className="flex flex-row flex-wrap justify-evenly">
        {res.results.map((movie) => (
          <div>
            <Movie
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              id={movie.id}
            />
          </div>
        ))}
      </div>
      {/* #TODO: Add Pagination to the pages */}
      {/* <div className="py-4 flex flex-row">
        <p className="ml-10">
          <a>prev</a>
        </p>
        <p onClick={nextPage} className="absolute right-10">
          <a>next</a>
        </p>
      </div> */}
    </div>
  );
}
