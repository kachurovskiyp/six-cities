import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import { AuthorizationStatus } from '../../const';

import { useAppSelector } from '../../hooks';

function ReviewList(): JSX.Element {
  const reviews = useAppSelector((state) => state.comments);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {
          reviews.map((review) => (
            <li className="reviews__item" key={`${review.user.name}-${review.id}`}>
              <Review review={review} />
            </li>)
          )
        }

      </ul>
      {authStatus === AuthorizationStatus.Auth ? <ReviewForm /> : null}
    </section>
  );
}

export default ReviewList;
