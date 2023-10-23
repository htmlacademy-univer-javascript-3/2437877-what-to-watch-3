interface FilmCardProps {
  name: string;
  pageUrl: string;
  imgUrl: string;
}

export const FilmCard = ({imgUrl, name, pageUrl}: FilmCardProps) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img
        src={imgUrl}
        alt={name}
        width={280}
        height={175}
      />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href={pageUrl}>
        {name}
      </a>
    </h3>
  </article>
);
