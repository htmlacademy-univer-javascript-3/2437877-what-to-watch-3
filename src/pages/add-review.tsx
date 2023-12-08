import {ReactElement, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {RatingStars} from '@components/rating/rating-stars.tsx';
import {NotFound} from '@pages/not-found.tsx';
import {BaseHeader} from '@components/common/base-header.tsx';
import {Breadcrumbs} from '@components/breadcrumbs/breadcrumbs.tsx';
import {GetFilmPageAddress} from '@services/get-filmpage-address.ts';
import {FilmInfo} from '@models/film-info.ts';
import {getFilmInfo, sendFilmReviewAction} from '@services/api-methods.ts';
import {useAppDispatch} from '@store/hooks.ts';

export const AddReview = ():ReactElement => {

  const {id} = useParams();
  const [rating, setRating] = useState(2);
  const [reviewText, setReviewText] = useState('');
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(id){
      getFilmInfo(id).then((x)=> setFilmInfo(x));
    }
  }, [id]);

  if (!id || !filmInfo) {
    return (<NotFound/>);
  }

  const sendComment = () => {
    if(reviewText.length < 50){
      // eslint-disable-next-line no-alert
      alert('text should be more 50 symbols');
    }
    dispatch(sendFilmReviewAction({id: id, rating: rating, comment: reviewText}))
      .then(()=>navigate(`/films/${id}/reviews`));
  };

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
      <div className="add-review add-review__form">
        <RatingStars currentRating={rating} onRatingChange={setRating}/>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={reviewText}
            onChange={(x)=> setReviewText(x.target.value)}
            disabled={!rating}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" onClick={sendComment}>
                Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
