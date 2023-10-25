import { useState } from 'react';
import { RatingStar } from './rating-star.tsx';

interface RatingStarsProps {
  currentRating: number;
  onRatingChange: (rating: number) => void;
}

export const RatingStars = ({ currentRating, onRatingChange }: RatingStarsProps) => {
  const nums = [...Array(11).keys()].slice(1).reverse();
  const [selectedRating, setSelectedRating] = useState(currentRating);

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  return (
    <div className="rating">
      <div className="rating__stars">
        {nums.map((star) => (
          <RatingStar
            index={star}
            key={star}
            isSelected={star === Math.floor(selectedRating)}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>
    </div>
  );
};
