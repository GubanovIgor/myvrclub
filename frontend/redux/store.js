import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers';

export const InitState = {
  // num: NaN,
  clubs: [],
  games: [],
  currentId: '',
  map: false,
  loading: false,
  error: false,
  loadingGame: false,
  errorGame: false,
  paginationValue: 1,
  gamesFilter: [
    {
      title: 'Жанр',
      value: [
        'Action',
        'Casual',
        'Indie',
        'Adventure',
        'RPG',
        'Gore',
        'Violent',
        'Simulation',
        'Racing',
      ],
    },
    {
      title: 'Год выхода',
      value: [
        '2019',
        '2018',
        '2017',
        '2016',
        '2015',
        '2014',
        '2013',
      ],
    },
    // {
    //   title: 'Возраст',
    //   value: [
    //     '0+',
    //     '3+',
    //     '7+',
    //     '12+',
    //     '16+',
    //     '18+',
    //   ],
    // },
    // {
    //   title: 'Теги',
    //   value: [
    //     'Зомби',
    //     'Для детей',
    //     'Музыка',
    //     'Много крови',
    //     'Магия',
    //     'Для взрослых',
    //   ],
    // },
    // {
    //   title: 'Оборудование',
    //   value: [
    //     'PS VR',
    //     'Oculus Rift',
    //     'HTC Vive',
    //     'Full Body VR',
    //   ],
    // },
  ],
  gamesFilterToggle: {
    'Жанр': {
      'Action': false,
      'Casual': false,
      'Indie': false,
      'Adventure': false,
      'RPG': false,
      'Gore': false,
      'Violent': false,
      'Simulation': false,
      'Racing': false,
    },
    'Оборудование': {
      'PS VR': false,
      'Oculus Rift': false,
      'HTC Vive': false,
      'Full Body VR': false,
    },
    'Год выхода': {
      '2019': false,
      '2018': false,
      '2017': false,
      '2016': false,
      '2015': false,
      '2014': false,
      '2013': false,
    },
    'Возраст': {
      '0+': false,
      '3+': false,
      '7+': false,
      '12+': false,
      '16+': false,
      '18+': false,
    },
    'Теги': {
      'Зомби': false,
      'Для детей': false,
      'Музыка': false,
      'Много крови': false,
      'Магия': false,
      'Для взрослых': false,
    },
  },
  clubsFilter: [
    {
      title: 'Оборудование',
      value: [
        'PS VR',
        'Oculus Rift',
        'HTC Vive',
        'Full Body VR',
      ],
    },
    {
      title: 'Стоимость часа игры',
      value: [
        'до 500',
        'до 1000',
        'до 5000',
      ],
    },
  ],
  clubsFilterToggle: {
    'Оборудование': {
      'PS VR': false,
      'Oculus Rift': false,
      'HTC Vive': false,
      'Full Body VR': false,
    },
    'Стоимость часа игры': {
      'до 500': false,
      'до 1000': false,
      'до 5000': false,
    },
  },
};

export function initializeStore(initialState = InitState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
