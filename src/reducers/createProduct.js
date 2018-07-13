import { PRODUCT_DATA } from '@/types';

const initState = {

}

export default function createProduct(state = initState, action) {
  if (action.type === PRODUCT_DATA) {
    return {
      ...state,
      ...action.data
    };
  }
  return state;
}
