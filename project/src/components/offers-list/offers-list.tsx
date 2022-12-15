import PlaceCard from '../../components/place-card/place-card';
import MainEmpty from '../main-empty/main-empty';

import { store } from '../../store';
import { useAppSelector } from '../../hooks/index';
import { setActiveOffer } from '../../store/action';
import { getSortStatus, getCurrentOffers, getSortedOffers } from '../../store/data-process/data-selectors';
import { Offer } from '../../types/offers-type';
import { defaultOffer } from '../../const';

function OffersList(): JSX.Element {
  const sortStatus = useAppSelector(getSortStatus);

  let offers = useAppSelector(getCurrentOffers);

  const sortedOffers = useAppSelector(getSortedOffers);

  if(sortStatus) {
    offers = sortedOffers;
  }

  const getOfferByID = (id: number): Offer => {
    const offerByID = offers.find((offer) => offer.id === id);

    if(offerByID) {
      return offerByID;
    }

    return defaultOffer;
  };

  const mouseHandler = (id: number): void => {
    store.dispatch(setActiveOffer(getOfferByID(id)));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.length <= 0
          ?
          <MainEmpty />
          :
          offers.map(
            (offer) =>
              <PlaceCard offer = {offer} key={offer.id} mouseHandler={mouseHandler}/>
          )
      }
    </div>
  );
}

export default OffersList;
