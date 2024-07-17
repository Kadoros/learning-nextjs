import { API_URL } from "../app/(home)/page";

async function getVdieos(id: string) {
  return await fetch(`${API_URL}/${id}/videos`).then((res) => res.json());
}

export default async function MovieVidoes({ id }: { id: string }) {
    return <h6>{JSON.stringify(await getVdieos(id))}</h6>
}