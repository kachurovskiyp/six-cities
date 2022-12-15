import { City, Cities } from '../../types/city-types';
import { SyntheticEvent} from 'react';

import { changeCurrentCity } from '../../store/action';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { getCities, getCurrentCity } from '../../store/data-process/data-selectors';
import { defaultCity } from '../../const';

const getNewCurrentCity = (evt: SyntheticEvent<HTMLAnchorElement>, cities: Cities): City => {
  const newCity = cities.find((city) => city.name === evt.currentTarget.dataset.cityname);

  if (newCity) {
    return newCity;
  }

  return defaultCity;
};

function CitiesList(): JSX.Element {
  const cities = useAppSelector(getCities);
  const currentCity = useAppSelector(getCurrentCity);

  const dispacth = useAppDispatch();

  const onCityButtonClick = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const newCurrentCity = getNewCurrentCity(evt, cities);

    dispacth(changeCurrentCity(newCurrentCity));
  };

  return (
    <ul className="locations__list tabs__list">

      {cities.map(
        (city, index) => (
          <li className={`locations__item ${city.name === currentCity.name ? 'locations--current' : ''} `} key={`${index + 1}_${city.name}`}>
            <a onClick={onCityButtonClick} data-cityname={city.name} className="locations__item-link tabs__item" href='index'>
              {city.name}
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export default CitiesList;
