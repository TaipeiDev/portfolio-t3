export const SkillRating = ({ rating, id }: { rating: number; id: string }) => (
  <div className="rating rating-md rating-half">
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="rating-hidden"
      checked={rating === 0}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 0.5}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 1}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 1.5}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 2}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 2.5}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 3}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 3.5}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 4}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-1 mask-star-2 bg-blue-500"
      checked={rating === 4.5}
    />
    <input
      type="radio"
      name={`${id}-experience-rating`}
      className="mask mask-half-2 mask-star-2 bg-blue-500"
      checked={rating === 5}
    />
  </div>
);

export default SkillRating;
