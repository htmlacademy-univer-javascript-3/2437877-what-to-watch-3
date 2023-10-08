import {Logo} from './Logo.tsx';
import {UserBlock} from './UserBlock.tsx';
interface HeaderProps{
  filmName: string;
  backgroundUrl: string;
}
export function Header({backgroundUrl, filmName}: HeaderProps){
  return(
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
}
