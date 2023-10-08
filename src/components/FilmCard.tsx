interface FilmCardProps {
  name: string;
  pageUrl: string;
  imgUrl: string;
}

export const FilmCard = (props: FilmCardProps) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img
        src={props.imgUrl}
        alt={props.name}
        width={280}
        height={175}
      />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href={props.pageUrl}>
        {props.name}
      </a>
    </h3>
  </article>
);
