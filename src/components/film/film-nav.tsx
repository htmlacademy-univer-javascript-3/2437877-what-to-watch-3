import {Link} from 'react-router-dom';
import classNames from 'classnames';


interface LinkWithLiWrapperProps{
  link:string;
  text:string;
}
export const LinkWithLiWrapper = ({link, text}:LinkWithLiWrapperProps) => (
  <li className={classNames('film-nav__item', {'film-nav__item--active': location.pathname.includes(`/${link}`)})}>
    <Link to={`../${link}`} className="film-nav__link">{text}</Link>
  </li>
);


export const FilmNav = () => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      <LinkWithLiWrapper text='Overview' link='description'/>
      <LinkWithLiWrapper text='Details' link='details'/>
      <LinkWithLiWrapper text='Reviews' link='reviews'/>
    </ul>
  </nav>
);

