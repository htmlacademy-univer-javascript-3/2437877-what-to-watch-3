import {RatingStars} from '@components/rating/rating-stars.tsx';
import {useParams} from 'react-router-dom';
import {NotFound} from '@pages/not-found.tsx';
import {BaseHeader} from '@components/common/base-header.tsx';
import {Breadcrumbs} from '@components/breadcrumbs/breadcrumbs.tsx';
import {GetFilmPageAddress} from '@services/get-filmpage-address.ts';
import {GetFilmInfoById} from '@services/get-film-info.ts';
import React, {useState} from 'react';

export const AddReview = () => {

  const {id} = useParams();
  const [rating, setRating] = useState(2);
  const [reviewText, setReviewText] = useState('');

  const handleReviewTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };
  if (!id) {
    return (<NotFound/>);
  }
  const filmInfo = GetFilmInfoById(id);

  return (
    <section className="film-card film-card--full">
      <section className="film-card__header">
        <div className="film-card__bg">
          <img src={filmInfo.backgroundUrl} alt={filmInfo.name}/>
        </div>
        <BaseHeader>
          <Breadcrumbs pageName={filmInfo.name} pageUrl={GetFilmPageAddress(id)}/>
        </BaseHeader>
        <div className="film-card__poster film-card__poster--small">
          <img src={filmInfo.posterUrl} alt={filmInfo.name} width="218" height="327" />
        </div>
      </section>
      <div className="add-review">
        <form action="#" className="add-review__form">
          <RatingStars currentRating={rating} onRatingChange={setRating}/>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              defaultValue={reviewText}
              onChange={handleReviewTextChange}
              disabled={!rating}
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
};
