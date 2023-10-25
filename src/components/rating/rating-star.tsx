interface RatingStarProps {
  index: number;
  isSelected: boolean;
  onRatingChange: (rating: number) => void;
}

export const RatingStar = ({ index, isSelected, onRatingChange }: RatingStarProps) => {
  const id = `star-${index}`;

  const handleRatingChange = () => {
    onRatingChange(index);
  };

  return (
    <>
      <input
        className="rating__input"
        id={id}
        type="radio"
        name="rating"
        value={index}
        checked={isSelected}
        onChange={handleRatingChange}
      />
      <label className="rating__label" htmlFor={id}>
        Rating {index}
      </label>
    </>
  );
};
