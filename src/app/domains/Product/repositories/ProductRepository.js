import { Http } from '../../../services';
import { PRODUCTS_API_ROUTE } from '../constants/routes';

export default class ProductRepository {
  static getAll(params = {}) {
    return Http.get(PRODUCTS_API_ROUTE, params);
  }
}