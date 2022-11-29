import { OffersProps } from '../../types/props-type';
import { SyntheticEvent } from 'react';

import { changeCity } from '../../store/action';
import { useAppSelector, useAppDispatch } from '../../hooks/index';

const getCityName = (evt: SyntheticEvent<HTMLAnchorElement>): string => {
  if (evt.currentTarget.dataset.cityname) {
    return evt.currentTarget.dataset.cityname;
  }
  return 'Some City';
};

function CitiesList({ offers }: OffersProps): JSX.Element {
  const cities: string[] = [];

  const currentCity = useAppSelector((state) => state.city);

  const dispacth = useAppDispatch();

  const onCityButtonClick = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const cityName = getCityName(evt);
    if(cityName !== currentCity) {
      dispacth(changeCity(cityName));
    }
  };

  offers.forEach((offer) => {
    cities.push(offer.city);
  });

  const uniqCities = [...new Set(cities)];

  return (
    <ul className="locations__list tabs__list">

      {uniqCities.map(
        (city, index) => (
          <li className={`locations__item ${city === currentCity ? 'locations--current' : ''} `} key={`${index + 1}_${city}`}>
            <a onClick={onCityButtonClick} data-cityname={city} className="locations__item-link tabs__item" href='index'>
              {city}
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export default CitiesList;
