import { BaseHeader } from './base-header';

interface HeaderProps {
  filmName: string;
  backgroundUrl: string;
}

export const HeaderWithBackground = ({filmName, backgroundUrl}: HeaderProps) => (
  <>
    <div className="film-card__bg">
      <img src={backgroundUrl} alt={filmName}/>
    </div>
    <BaseHeader/>
  </>
);
