import { SyntheticEvent, useState, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { loadSortedOffers, changeSortStatus } from '../../store/action';
import { getCurrentOffers } from '../../store/data-process/data-selectors';

import { SortType, SortName } from '../../const';

import { Offer } from '../../types/offers-type';

function SortList(): JSX.Element {
  const dispacth = useAppDispatch();
  const currentOffers = useAppSelector(getCurrentOffers);

  const placeOption = useRef<HTMLUListElement | null>(null);
  const [sortString, setSortString] = useState(SortName.Default);

  const onSortButtonClick = () => {
    placeOption.current?.classList.toggle('places__options--opened');
  };

  const onSortItemClick = (evt: SyntheticEvent<HTMLElement>) => {
    const sortType = evt.currentTarget.dataset.sorttype;
    let sortedOffers: Offer[] = [];

    if (sortType) {

      switch (sortType) {
        case SortType.byPriceLowToHigh:
          setSortString(SortName.byPriceLowToHigh);
          onSortButtonClick();
          sortedOffers = currentOffers.slice().sort((a: Offer, b: Offer) => a.price - b.price);
          dispacth(changeSortStatus(true));
          break;

        case SortType.byProceHighToLow:
          setSortString(SortName.byProceHighToLow);
          onSortButtonClick();
          sortedOffers = currentOffers.slice().sort((a: Offer, b: Offer) => b.price - a.price);
          break;

        case SortType.byRating:
          setSortString(SortName.byRating);
          onSortButtonClick();
          sortedOffers = currentOffers.slice().sort((a: Offer, b: Offer) => b.rating - a.rating);
          dispacth(changeSortStatus(true));
          break;

        case SortType.Default:
          setSortString(SortName.Default);
          onSortButtonClick();
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
        {sortString}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul ref={placeOption} className="places__options places__options--custom">
        <li onClick={onSortItemClick} data-sorttype={SortType.Default} className="places__option places__option--active" tabIndex={0}>{SortName.Default}</li>
        <li onClick={onSortItemClick} data-sorttype={SortType.byPriceLowToHigh} className="places__option" tabIndex={0}>{SortName.byPriceLowToHigh}</li>
        <li onClick={onSortItemClick} data-sorttype={SortType.byProceHighToLow} className="places__option" tabIndex={0}>{SortName.byProceHighToLow}</li>
        <li onClick={onSortItemClick} data-sorttype={SortType.byRating} className="places__option" tabIndex={0}>{SortName.byRating}</li>
      </ul>
    </form>
  );
}

export default SortList;
