import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers';

const InitState = {
  num: NaN,
  clubs: [],
  games: [],
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
};

export function initializeStore(initialState = InitState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
