import {
  CategoryPageInterface as Cat,
  ProductInterface,
  BrandPageInterface
} from '../../../model/interfaces';

const doConcat = <T>(currentList: T, newList: T): T => {
  return currentList;
};

export const concatenateProductList = (currentList: Cat, newList: Cat) => {
  if (currentList.id_category !== newList.id_category) {
    return newList;
  }

  let productIdsSet = new Set<number>();
  let products: ProductInterface[] = [...currentList.products];

  //doConcat<Cat>(currentList, newList);

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

export const concatenateBrandProductList = (
  currentList: BrandPageInterface,
  newList: BrandPageInterface
) => {
  if (currentList.id !== newList.id) {
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
