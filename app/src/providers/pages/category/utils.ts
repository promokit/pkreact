import { CategoryPageInterface as Cat, ProductInterface } from '../../../model/interfaces';

export const concatenateProductList = (currentList: Cat, newList: Cat) => {
  if (!currentList) return newList;

  if (currentList.id_category !== newList.id_category) {
    return newList;
  }

  let productIdsSet = new Set<number>();
  let products: ProductInterface[] = [...currentList.products];

  products.forEach((product) => productIdsSet.add(Number(product.id_product)));
  const uniqueList: number[] = Array.from(productIdsSet);

  newList.products.forEach((product) => {
    if (!uniqueList.includes(Number(product.id_product))) {
      products.push(product);
    }
  });

  return {
    ...currentList,
    products,
    pagination: { ...newList.pagination },
    facets: { ...newList.facets }
  };
};
