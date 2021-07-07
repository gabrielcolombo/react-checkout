import { useState } from 'react';
import { Http } from '../../../services';
import { Product } from '../models';
import { ProductsRepository } from '../repositories';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
}

const useProductsQuery = (params = {}) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const fetchProducts = async () => {
    setState({ loading: true, error: false, data: [] });

    try {
      const { results } = await ProductsRepository.getAll();
      const products = results.map(product => new Product(product));

      setState({ data: products, error: false, loading: false });
    } catch (error) {
      setState({ error, data: null, loading: false, })
    }
  }

  return [fetchProducts, state];
}

export default useProductsQuery;