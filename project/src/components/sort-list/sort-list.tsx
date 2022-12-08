import { SyntheticEvent } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { loadSortedOffers, changeSortStatus } from '../../store/action';
import { getCurrentOffers } from '../../store/data-process/data-selectors';

import { SortType } from '../../const';

import { Offer } from '../../types/offers-type';

function SortList(): JSX.Element {
  const dispacth = useAppDispatch();
  const currentOffers = useAppSelector(getCurrentOffers);

  const onSortButtonClick = () => {
    const sortListCustom = document.querySelector('.places__options--custom');
    if (sortListCustom) {
      sortListCustom.classList.toggle('places__options--opened');
    }
  };

  const onSortItemClick = (evt: SyntheticEvent<HTMLElement>) => {
    const sortType = evt.currentTarget.dataset.sorttype;
    let sortedOffers: Offer[] = [];

    if (sortType) {

      switch (sortType) {
        case SortType.byPriceLowToHigh:
          sortedOffers = currentOffers.slice().sort((a: Offer, b: Offer) => a.price - b.price);
          dispacth(changeSortStatus(true));
          break;

        case SortType.byProceHighToLow:
          sortedOffers = currentOffers.slice().sort((a: Offer, b: Offer) => b.price - a.price);
          break;

        case SortType.byRating:
          sortedOffers = currentOffers.slice().sort((a: Offer, b: Offer) => b.rating - a.rating);
          dispacth(changeSortStatus(true));
          break;

        case SortType.Default:
          dispacth(changeSortStatus(false));
          break;
      }

      dispacth(loadSortedOffers(sortedOffers));
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={onSortButtonClick} className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        <li onClick={onSortItemClick} data-sorttype={SortType.Default} className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li onClick={onSortItemClick} data-sorttype={SortType.byPriceLowToHigh} className="places__option" tabIndex={0}>Price: low to high</li>
        <li onClick={onSortItemClick} data-sorttype={SortType.byProceHighToLow} className="places__option" tabIndex={0}>Price: high to low</li>
        <li onClick={onSortItemClick} data-sorttype={SortType.byRating} className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortList;
