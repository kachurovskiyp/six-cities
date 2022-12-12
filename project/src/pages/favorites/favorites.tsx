import Header from '../../components/header/header';
import FavoriteCard from '../../components/favorite-card/favorite-card';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/data-process/data-selectors';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const cities: string[] = [];

  favoriteOffers.forEach((offer) => {
    cities.push(offer.city.name);
  });

  const uniqCities = [...new Set(cities)];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                uniqCities.map(
                  (city, index) => (
                    <li className="favorites__locations-items" key={`${index + 1}_${city}`}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="index">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          favoriteOffers.map(
                            (offer) =>
                              offer.city.name === city
                                ?
                                <FavoriteCard offer={offer} key={offer.id} />
                                :
                                null
                          )
                        }
                      </div>
                    </li>
                  ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
