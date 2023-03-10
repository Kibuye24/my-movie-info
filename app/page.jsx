import Movie from "../components/Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  return (
    <div>
      <h1 className="text-4xl text-center py-2">Popular Movies</h1>
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
    </div>
  );
}
