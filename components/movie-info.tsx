import styles from "../styles/movie-info.module.css"
import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
  return await fetch(`${API_URL}/${id}`).then((res) => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_black"}>Home Page &rarr;</a>
      </div>
    </div>
  );
}
