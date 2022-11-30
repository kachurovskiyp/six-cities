import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';

import { useAppSelector } from '../../hooks/index';

function OffersList(): JSX.Element {
  const state = useState <number>();
  const setActiveCardID = state[1];
  const sortStatus = useAppSelector((stateGlobal) => stateGlobal.sortStatus);

  let offers = useAppSelector((stateGlobal) => stateGlobal.offers);

  const sortedOffers = useAppSelector((stateGlobal) => stateGlobal.sortedOffers);

  if(sortStatus) {
    offers = sortedOffers;
  }

  const mouseHandler = (id: number): void => {
    setActiveCardID(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(
          (offer) =>
            <PlaceCard offer = {offer} key={offer.id} mouseHandler={mouseHandler}/>
        )
      }
    </div>
  );
}

export default OffersList;
