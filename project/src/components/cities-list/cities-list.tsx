import { OffersProps } from '../../types/props-type';

function CitiesList({ offers }: OffersProps): JSX.Element {
  const cities: string[] = [];

  offers.forEach((offer) => {
    cities.push(offer.city);
  });

  const uniqCities = [...new Set(cities)];

  return (
    <ul className="locations__list tabs__list">

      {uniqCities.map(
        (city, index) => (
          <li className="locations__item" key={`${index + 1}_${city}`}>
            <a className="locations__item-link tabs__item" href="index">
              <span>{city}</span>
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export default CitiesList;
