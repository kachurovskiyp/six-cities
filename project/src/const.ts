export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Property = '/property',
  Main = '/',
  NotFound = '/not-found'
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
  Offers = '/hotels',
  Comments = '/comments',
  LogIn = '/login',
  LogOut = '/logout',
  Favorites = '/favorite'
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER'
}

export const TIMEOUT_SHOW_ERROR = 5000;
