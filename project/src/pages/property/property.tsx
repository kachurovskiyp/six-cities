import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { fetchCurrentOfferAction, fetchCommentsAction } from '../../store/api-actions';
import { setCurrentOfferID } from '../../store/action';
import { AppRoute } from '../../const';
import { getOffers, getloadCurrentOfferStatus } from '../../store/data-process/data-selectors';

import Room from '../../components/room/room';
import Load from '../../components/load/load';
import Header from '../../components/header/header';

function Property(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const loadRoomStatus = useAppSelector(getloadCurrentOfferStatus);
  const offerID = Number(window.location.search.substring(1).split('=')[1]);
  let offerMath = false;
  const navigate = useNavigate();

  offers.forEach((offer) => {
    if(offerID === offer.id){
      offerMath = true;
    }
  });

  if(!offerMath) {
    navigate(AppRoute.NotFound);
  }

  useEffect(() => {
    store.dispatch(fetchCurrentOfferAction(offerID));
    store.dispatch(fetchCommentsAction(offerID));
    store.dispatch(setCurrentOfferID(offerID));
  });

  return (
    <div className="page">
      <Header />

      {loadRoomStatus ? <Load/> : <Room />}
    </div>
  );
}

export default Property;
