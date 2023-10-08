import {RatingStar} from './RatingStar.tsx';

export function RatingStars(){
  const nums = [...Array(11).keys()].slice(1).reverse();
  return (
    <div className="rating">
      <div className="rating__stars">
        {nums.map((star) => <RatingStar index={star} key={star}/>)}
      </div>
    </div>
  );
}
