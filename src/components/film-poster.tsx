export const FilmPoster = ({filmName, imgUrl}: {filmName: string; imgUrl: string}) => (
  <div className="film-card__poster">
    <img
      src={imgUrl}
      alt={`${filmName} poster`}
      width={218}
      height={327}
    />
  </div>
);
