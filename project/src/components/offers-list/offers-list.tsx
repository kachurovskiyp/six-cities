import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';
import MainEmpty from '../main-empty/main-empty';

import { useAppSelector } from '../../hooks/index';
import { getSortStatus, getOffers, getSortedOffers } from '../../store/data-process/data-selectors';

function OffersList(): JSX.Element {
  const state = useState <number>();
  const setActiveCardID = state[1];
  const sortStatus = useAppSelector(getSortStatus);

  let offers = useAppSelector(getOffers);

  const sortedOffers = useAppSelector(getSortedOffers);

  if(sortStatus) {
    offers = sortedOffers;
  }

  const mouseHandler = (id: number): void => {
    setActiveCardID(id);
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
