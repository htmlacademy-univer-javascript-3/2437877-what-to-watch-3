import classNames from 'classnames';
import {Link} from 'react-router-dom';

interface LinkWithLiWrapperProps{
  link:string;
  text:string;
}
export const LinkWithLiWrapper = ({link, text}:LinkWithLiWrapperProps) => (
  <li className={classNames('film-nav__item', {'film-nav__item--active': location.pathname.includes(`/${link}`)})}>
    <Link to={`../${link}`} className="film-nav__link">{text}</Link>
  </li>
);
