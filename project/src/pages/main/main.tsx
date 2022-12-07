import { Offers } from '../../types/offers-type';

import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import Load from '../../components/load/load';

import SortList from '../../components/sort-list/sort-list';
import Header from '../../components/header/header';
import { store } from '../../store';
import { loadCurrentOffers } from '../../store/action';

import { useAppSelector } from '../../hooks/index';
import { getOffers, getCurrentCity, getStatus } from '../../store/data-process/data-selectors';

// import Map from '../../components/map/map';

function Main(): JSX.Element {

  const offers = useAppSelector(getOffers);

  const currentCity = useAppSelector(getCurrentCity);
  const loadStatus = useAppSelector(getStatus);

  const currentOffers: Offers = [];

  offers.forEach((offer) => {
    if(offer.city.name === currentCity) {
      currentOffers.push(offer);
    }
  });

  store.dispatch(loadCurrentOffers(currentOffers));

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <CitiesList offers={offers} />

          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>

              <SortList />

              {loadStatus ? <Load/> : <OffersList />}

            </section>
            <div className="cities__right-section">
              <section style={{height: '500'}} className="cities__map map">
                {/* <Map city={offers[0]} offers={offers} activeOffer={offers[0]} /> */}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
