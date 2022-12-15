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

export enum SortName {
  Default = 'Popular',
  byPriceLowToHigh = 'Price: low to high',
  byProceHighToLow = 'Price: high to low',
  byRating = 'Top rated first'
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
  Favorites = '/favorite',
  Nearby = 'nearby'
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER'
}

export const PASSREG = '[a-zA-Z]\\d';

export const TIMEOUT_SHOW_ERROR = 5000;

export const defaultCity = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

export const defaultOffer = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    },
    name: '',
  },
  description: '',
  goods: [''],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: ''
  },
  id: 0,
  images: [''],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: ''
};
