import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { SEARCH_PRODUCTS } from '../queries';

const useSearchProducts = (searchTerm) => {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(SEARCH_PRODUCTS, {
    variables: { search: searchTerm },
    skip: !searchTerm
  });

  useEffect(() => {
    if (data && data.products && data.products.items) {
      setProducts(data.products.items);
    }
  }, [data]);

  return { loading, error, products };
};

export default useSearchProducts;
