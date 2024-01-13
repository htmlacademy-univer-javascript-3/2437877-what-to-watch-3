import {Link} from 'react-router-dom';

interface PlayProps {
  filmUrl: string;
}

export const Play = ({filmUrl}: PlayProps) => (
  <Link to={filmUrl} className="btn btn--play film-card__button" type="button">
    <svg viewBox="0 0 19 19" width={19} height={19}>
      <use xlinkHref="#play-s"/>
    </svg>
    <span>Play</span>
  </Link>
);
