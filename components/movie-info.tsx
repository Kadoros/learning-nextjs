import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  return await fetch(`${API_URL}/${id}`).then((res) => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
    return <h6>{JSON.stringify(await getMovie(id))}</h6>
}