interface GenreItemProps{
  genre: string;
  isActive?: boolean;
}

export const GenreItem = ({genre, isActive = false}: GenreItemProps) =>
  (
    <li className="catalog__genres-item">
      <a href="#" className={`catalog__genres-link ${ isActive ? 'catalog__genres-item--active' : ''} `}>
        {genre}
      </a>
    </li>
  );
