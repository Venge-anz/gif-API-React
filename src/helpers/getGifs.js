export const getGif = async (category) => {
  const api_key = "esVYJdVG1Mtsvbm2n5dZR6euG1zaGpZ4";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=30`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
