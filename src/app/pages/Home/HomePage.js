import React, { useEffect } from 'react';
import useCart from '../../domains/Cart/hooks/useCart';
import { useProductsQuery } from '../../domains/Product/hooks';

const HomePage = () => {
  const [fetchProducts, { data, loading, error }] = useProductsQuery();

  useEffect(fetchProducts, []);

  return (
    <div>
      {loading
        ? <span>Loading</span>
        : <span>Home {console.log(data)}</span>
      }
    </div>
  )
}

export default HomePage;