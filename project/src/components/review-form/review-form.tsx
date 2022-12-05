import { SyntheticEvent, useState, useRef } from 'react';
import { useAppSelector } from '../../hooks';
import { postComment } from '../../store/api-actions';
import { store } from '../../store';

function ReviewForm(): JSX.Element {
  const MIN_COMMENT_LENGTH = 59;
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const [reviewText, setReviewText] = useState('');

  let rating = 0;
  const offerID = useAppSelector((state) => state.currentOfferID);

  const enableSubmitButton = () => {
    submitButtonRef.current?.removeAttribute('disabled');
  };

  const reviewTextChangeHendler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(evt.target.value);
    if(evt.target.value.length > MIN_COMMENT_LENGTH){
      enableSubmitButton();
    }
  };

  const onRadioChange = (evt: SyntheticEvent<HTMLInputElement>) => {
    rating = Number(evt.currentTarget.value);
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const commentData = {
      comment: reviewText,
      rating: rating,
      offerID: offerID
    };
    store.dispatch(postComment(commentData));
  };

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={onRadioChange} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onRadioChange} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onRadioChange} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onRadioChange} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={onRadioChange} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={reviewTextChangeHendler} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={reviewText}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button ref={submitButtonRef} className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
