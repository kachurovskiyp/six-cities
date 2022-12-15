import { useEffect } from 'react';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { fetchCurrentOfferAction, fetchCommentsAction, fetchNearbyOffers } from '../../store/api-actions';
import { setCurrentOfferID } from '../../store/action';
import { getLoadCurrentOfferStatus } from '../../store/data-process/data-selectors';

import Room from '../../components/room/room';
import Load from '../../components/load/load';
import Header from '../../components/header/header';

function Property(): JSX.Element {
  const loadRoomStatus = useAppSelector(getLoadCurrentOfferStatus);
  const offerID = Number(window.location.search.substring(1).split('=')[1]);

  useEffect(() => {
    store.dispatch(fetchCurrentOfferAction(offerID));
    store.dispatch(fetchCommentsAction(offerID));
    store.dispatch(setCurrentOfferID(offerID));
    store.dispatch(fetchNearbyOffers(offerID));
  });

  return (
    <div className="page">
      <Header />

      {loadRoomStatus ? <Load/> : <Room />}
    </div>
  );
}

export default Property;
