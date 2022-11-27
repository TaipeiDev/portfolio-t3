export const LoveRating = ({ rating, id }: { rating: number; id: string }) => (
  <div className="rating rating-md rating-half">
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="rating-hidden"
      checked={rating === 0}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-1 mask-heart bg-pink-500"
      checked={rating === 0.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-2 mask-heart bg-pink-500"
      checked={rating === 1}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-1 mask-heart bg-pink-500"
      checked={rating === 1.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-2 mask-heart bg-pink-500"
      checked={rating === 2}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-1 mask-heart bg-pink-500"
      checked={rating === 2.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-2 mask-heart bg-pink-500"
      checked={rating === 3}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-1 mask-heart bg-pink-500"
      checked={rating === 3.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-2 mask-heart bg-pink-500"
      checked={rating === 4}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-1 mask-heart bg-pink-500"
      checked={rating === 4.5}
      readOnly={true}
    />
    <input
      type="radio"
      name={`${id}-love-rating`}
      className="mask mask-half-2 mask-heart bg-pink-500"
      checked={rating === 5}
      readOnly={true}
    />
  </div>
);

export default LoveRating;
