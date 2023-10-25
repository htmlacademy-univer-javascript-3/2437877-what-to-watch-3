interface FilmPosterProps {
  filmName: string;
  imgUrl: string;
}

export const FilmPoster = ({filmName, imgUrl}: FilmPosterProps) => (
  <div className="film-card__poster">
    <img src={imgUrl} alt={`${filmName} poster`} width={218} height={327}/>
  </div>
);
