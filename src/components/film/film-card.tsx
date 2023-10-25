import {Film} from '@mocks/films.ts';
import {Link} from 'react-router-dom';
import {GetFilmPageAddress} from '@services/get-filmpage-address.ts';
import {useState} from 'react';

export const FilmCard = ({id, name, posterUrl}: Film) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={GetFilmPageAddress(id)} className="small-film-card catalog__films-card" onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="small-film-card__image">
        <img src={posterUrl} alt={name} width={280} height={175}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={GetFilmPageAddress(id)} className="small-film-card__link">{name}</Link>
      </h3>
    </Link>
  );
};
