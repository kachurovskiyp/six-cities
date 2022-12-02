export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Property = '/property',
  Main = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum SortType {
  Default = 'Popular',
  byPriceLowToHigh = 'PriceLowToHigh',
  byProceHighToLow = 'PriceHighToLow',
  byRating = 'Rating'
}

export enum APIRoute {
  Offers = '/hotels'
}
