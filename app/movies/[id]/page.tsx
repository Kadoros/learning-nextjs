import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVidoes from "../../../components/movie-vidoes";
import { title } from "process";


export async function genrateMatadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id)
  return {
    title: movie.title
  }
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVidoes id={id} />
      </Suspense>
    </div>
  );
}
