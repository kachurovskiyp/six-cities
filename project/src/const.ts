export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Property = '/property',
  Main = '/'
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Uknown = 'UNKNOWN'
}

export enum SortType {
  Default = 'Popular',
  byPriceLowToHigh = 'PriceLowToHigh',
  byProceHighToLow = 'PriceHighToLow',
  byRating = 'Rating'
}
