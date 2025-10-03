import productsData from '~/data/products.json';
import type { Product } from '../types';

export const useProducts = () => {
  const products: Product[]  = productsData;

  const getProductById = (id: number): Product|undefined =>  products.find(product => product.id === id);

  const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category === category);
  }

  return { products, getProductById, getProductsByCategory }
};
