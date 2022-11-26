import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import { ReviewsProps } from '../../types/reviews-type';

function ReviewList({ reviews }: ReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {
          reviews.map((review) => (
            <li className="reviews__item" key={review.name}>
              <Review review={review} />
            </li>)
          )
        }

      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
