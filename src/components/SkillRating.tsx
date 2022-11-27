export const SkillRating = ({ rating, id }: { rating: number; id: string }) => (
  <div className="rating rating-md rating-half">
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="rating-hidden"
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 0.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 1}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 1.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 2}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 2.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 3}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 3.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 4}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 4.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 5}
      readOnly={true}
    />
  </div>
);

export default SkillRating;
