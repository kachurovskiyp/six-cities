import { Link } from 'react-router-dom';
import { OfferProps } from '../../types/props-type';

function PlaceCard({offer, mouseHandler} : OfferProps): JSX.Element {

  const mouseOverHandler = () => {
    if(mouseHandler) {
      mouseHandler(offer.id);
    }

  };

  return (
    <article onMouseOver={mouseOverHandler} className="cities__card place-card" id={`${offer.id}`}>
      <div className="place-card__mark">
        {offer.isPremium ? <span>Premium</span> : null}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={{pathname: '/property', search: `?id=${offer.id}`}}>
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: '/property', search: `?id=${offer.id}`}}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
