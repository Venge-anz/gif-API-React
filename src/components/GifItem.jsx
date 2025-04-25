export const GifItem = ({ title, url, id }) => {
  console.log({ title, url, id });
  return (
    <div className="gif-item">
      <img src={url} alt="title" />
      <p>{title}</p>
      <button class="heart-button">♥️</button>
    </div>
  );
};
