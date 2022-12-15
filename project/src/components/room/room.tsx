import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import NeighbourhoodList from '../neighbourhoods-list/neighbourhood-list';
import { useAppSelector } from '../../hooks';
import { getCurrentOffer, getNearbyOffers } from '../../store/data-process/data-selectors';
import { store } from '../../store';
import { fetchFavoriteStatusIn, fetchFavoriteStatusOut } from '../../store/api-actions';
import ErrorMessage from '../error-message/error-message';

function Room(): JSX.Element {

  const offer = useAppSelector(getCurrentOffer);
  const nearByOffers = useAppSelector(getNearbyOffers);
  const currentOffers = [...nearByOffers, offer];

  const onFavoriteButtomClick = () => {
    offer.isFavorite
      ?
      store.dispatch(fetchFavoriteStatusOut(offer.id))
      :
      store.dispatch(fetchFavoriteStatusIn(offer.id));
  };

  return (
    <main className="page__main page__main--property">
      <ErrorMessage/>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((img, index) => (
              <div className="property__image-wrapper" key={`img${index + 2}`}>
                <img className="property__image" src={img} alt="studio" key={`img${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              {offer.isPremium ? '<span>Premium</span>' : ''}
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button onClick={onFavoriteButtomClick} className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${offer.rating}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating / 10}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">

                {offer.goods.map((item, index) => (
                  <li className="property__inside-item" key={`equipment${index + 1}`}>{item}</li>
                ))}

              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.host.isPro ? 'Pro' : ''}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>

            <ReviewList/>

          </div>
        </div>
        <section className="property__map map">
          <Map offers={currentOffers} city={offer.city} />
        </section>
      </section>
      <div className="container">
        <NeighbourhoodList />
      </div>
    </main>
  );
}

export default Room;
