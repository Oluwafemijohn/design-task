import {RadioButtonProps} from 'react-native-radio-buttons-group';

export const TOKEN = '@TOKEN';
export const CELL_COUNT = 4;
export const LOGIN_RESPONSE_CACHE_KEY = '@LOGIN_RESPONSE_CACHE_KEY';

export const array = ['Cereal', 'Beverages', 'Drinks'];

export const category = [
  {
    id: 1,
    image: require('../../assets/popular-image.png'),
    rating: 3,
    sherzPrice: '1500',
    marketPrice: '1,800',
    productName: 'Pure Irish Butter',
  },
  {
    id: 2,
    image: require('../../assets/popular-image.png'),
    rating: 5,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
  {
    id: 3,
    image: require('../../assets/popular-image.png'),
    rating: 2,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
  {
    id: 4,
    image: require('../../assets/popular-image.png'),
    rating: 2,
    sherzPrice: '800',
    marketPrice: '1,800',
    productName: 'Product Name',
  },
];

export const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Ascending',
    value: 'Ascending',
    size: 30,
  },
  {
    id: '2',
    label: 'Decending',
    value: 'Decending',
  },
];

export const listArray = ['Monthlies', 'Extral'];
