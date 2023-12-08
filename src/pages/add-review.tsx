import React, {ReactElement, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {RatingStars} from '@components/rating/rating-stars.tsx';
import {NotFound} from '@pages/not-found.tsx';
import {BaseHeader} from '@components/common/base-header.tsx';
import {Breadcrumbs} from '@components/breadcrumbs/breadcrumbs.tsx';
import {GetFilmPageAddress} from '@services/get-filmpage-address.ts';
import {FilmInfo} from '@models/film-info.ts';
import {getFilmInfo} from '@services/api-methods.ts';

export const AddReview = ():ReactElement => {

  const {id} = useParams();
  const [rating, setRating] = useState(2);
  const [reviewText, setReviewText] = useState('');
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();
  useEffect(()=>{
    if(id){
      getFilmInfo(id).then((x)=> setFilmInfo(x));
    }
  }
  );

  const handleReviewTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  if (!id || !filmInfo) {
    return (<NotFound/>);
  }

  return (
    <section className="film-card film-card--full">
      <section className="film-card__header">
        <div className="film-card__bg">
          <img src={filmInfo.backgroundImage} alt={filmInfo.name}/>
        </div>
        <BaseHeader>
          <Breadcrumbs pageName={filmInfo.name} pageUrl={GetFilmPageAddress(id)}/>
        </BaseHeader>
        <div className="film-card__poster film-card__poster--small">
          <img src={filmInfo.posterImage} alt={filmInfo.name} width="218" height="327" />
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
