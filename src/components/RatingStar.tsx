export const RatingStar = ({index}: { index: number }) => {
  const id = `star-${index}`;
  return(
    <>
      <input
        className="rating__input"
        id={id}
        type="radio"
        name="rating"
        defaultValue={index}
      />
      <label className="rating__label" htmlFor={id}>
              Rating {index}
      </label>
    </>
  );
};
