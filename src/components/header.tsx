import {Logo} from './logo.tsx';
import {UserBlock} from './user-block.tsx';
interface HeaderProps{
  filmName: string;
  backgroundUrl: string;
}

export const Header = ({backgroundUrl, filmName}: HeaderProps) => (
  <>
    <div className="film-card__bg">
      <img src={backgroundUrl} alt={filmName}/>
    </div>
    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header film-card__head">
      <div className="logo">
        <a className="logo__link">
          <Logo/>
        </a>
      </div>
      <UserBlock avatarUrl='img/avatar.jpg'/>
    </header>
  </>);
