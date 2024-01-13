interface FilmInfoProps {
  filmName: string;
  genre: string;
  year: number;
}

export const FilmInfo = ({filmName, genre, year}: FilmInfoProps) => (
  <>
    <h2 className="film-card__title">{filmName}</h2>
    <p className="film-card__meta">
      <span className="film-card__genre">{genre}</span>
      <span className="film-card__year">{year}</span>
    </p>
  </>
);
