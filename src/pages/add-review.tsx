import {PromoHeader} from '@components/promo/promo-header.tsx';
import {promoFilm} from '../mocks/storeOfShit.ts';
import {RatingStars} from '@components/rating/rating-stars.tsx';

export const AddReview = () => (
  <section className="film-card film-card--full">
    <PromoHeader filmName={promoFilm.filmName}
      genre={promoFilm.genre}
      year={promoFilm.year}
      backgroundUrl={promoFilm.backgroundUrl}
      posterUrl={promoFilm.posterUrl}
    />
    <div className="add-review">
      <form action="#" className="add-review__form">
        <RatingStars/>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={''}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
);
