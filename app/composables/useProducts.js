import productsData from '~/data/products.json';

export const useProducts = () => {
  const products = productsData;

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
  };

  return { products, getProductById }
};
