import PlaceCard from '../place-card/place-card';
import { useState } from 'react';
import { getNearbyOffers } from '../../store/data-process/data-selectors';
import { useAppSelector } from '../../hooks';

function NeighbourhoodList(): JSX.Element {
  const state = useState<number>();
  const setActiveCardID = state[1];

  const offers = useAppSelector(getNearbyOffers);

  const mouseHandler = (id: number): void => {
    setActiveCardID(id);
  };

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {
          offers.map(
            (offer) =>
              <PlaceCard offer={offer} key={offer.id} mouseHandler={mouseHandler} />
          )
        }

      </div>
    </section>
  );
}

export default NeighbourhoodList;
