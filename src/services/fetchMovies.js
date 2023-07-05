export const fetchMovies = async (category) => {
  if(!category) {
    return [];
  }

  const url = `https://api.themoviedb.org/3/${category}?language=es-ES&page=1&api_key=dee4a3b9fca48d3cddec2ed10bf6f030`
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
