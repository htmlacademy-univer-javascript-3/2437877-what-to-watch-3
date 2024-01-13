import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {FilmReview} from '@components/movie-page/film-review.tsx';
import {useAppDispatch, useAppSelector} from '@store/hooks.ts';
import {NotFound} from '@pages/not-found.tsx';
import {getFilmReviewsAction} from '@services/api-methods.ts';

export const FilmReviews = () => {
  const {id} = useParams();
  const reviews = useAppSelector((x)=>x.MAIN.reviews);
  const dispatch = useAppDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    if (!isDataLoaded && id) {
      dispatch(getFilmReviewsAction(id));
    }
    return () => {
      setIsDataLoaded(true);
    };
  }, [id, dispatch, reviews, isDataLoaded]);

  if (!id) {
    return (<NotFound/>);
  }

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => <FilmReview key={review.id} filmReview={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(Math.floor(reviews.length / 2) + 1).map((review) => <FilmReview key={review.id} filmReview={review}/>)}
      </div>
    </div>
  );
};
