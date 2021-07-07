import React, { useEffect } from 'react';
import useCart from '../../domains/Cart/hooks/useCart';
import { useProductsQuery } from '../../domains/Product/hooks';

import { MainLayout } from '../../layouts';

const HomePage = () => {
  const [fetchProducts, { data, loading, error }] = useProductsQuery();

  useEffect(fetchProducts, []);

  return (
    <MainLayout pageTitle="Sneakers">
      {loading
        ? <span>Loading</span>
        : <span>Home {console.log(data)}</span>
      }
    </MainLayout>
  )
}

export default HomePage;