import productsData from '~/data/products.json';

export const useProducts = () => {
  const products = productsData;

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category == category);
  }

  return { products, getProductById, getProductsByCategory }
};
