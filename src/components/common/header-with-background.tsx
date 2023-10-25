import {ReactNode} from 'react';
import { BaseHeader } from './base-header';

interface HeaderProps {
  filmName: string;
  backgroundUrl: string;
  child?: ReactNode;
}

export const HeaderWithBackground = ({filmName, backgroundUrl, child = null}: HeaderProps) => (
  <>
    <div className="film-card__bg">
      <img src={backgroundUrl} alt={filmName}/>
    </div>
    <BaseHeader child={child}/>
  </>
);
