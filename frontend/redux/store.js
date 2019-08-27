import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers';

const InitState = {
  num: NaN,
  clubs: [],
  games: [],
  loading: false,
  error: false,
  filter: [
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
    {
      title: 'Возраст',
      value: [
        '0+',
        '3+',
        '7+',
        '12+',
        '16+',
        '18+',
      ],
    },
    {
      title: 'Теги',
      value: [
        'Зомби',
        'Для детей',
        'Музыка',
        'Много крови',
        'Магия',
        'Для взрослых',
      ],
    },
  ],
  filterToggle: {
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
};

export function initializeStore(initialState = InitState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
