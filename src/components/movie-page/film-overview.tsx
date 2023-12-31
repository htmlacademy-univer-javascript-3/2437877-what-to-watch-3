import {FilmRating} from '../film/film-rating.tsx';

export const FilmOverview = () => (
  <>
    <FilmRating/>
    <div className="film-card__text">
      <p>
      In the 1930s, the Grand Budapest Hotel is a popular European ski
      resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
      </p>
      <p>
      Gustave prides himself on providing first-class service to the
      hotel&apos;s guests, including satisfying the sexual needs of the many
      elderly women who stay there. When one of Gustave&apos;s lovers dies
      mysteriously, Gustave finds himself the recipient of a priceless
      painting and the chief suspect in her murder.
      </p>
      <p className="film-card__director">
        <strong>Director: Wes Anderson</strong>
      </p>
      <p className="film-card__starring">
        <strong>
        Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and
        other
        </strong>
      </p>
    </div>
  </>
);
