import { PRODUCT_DATA } from './types';


export default function createProduct(data) {
  return {
    type: PRODUCT_DATA,
    data
  }
}
