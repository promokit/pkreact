import {
  CategoryPageInterface as Cat,
  ProductInterface,
  BrandPageInterface
} from '../../../model/interfaces';

const doConcat = (
  currentList: ProductInterface[],
  newList: ProductInterface[]
): ProductInterface[] => {
  let productIdsSet = new Set<number>();
  let products: ProductInterface[] = [...currentList];

  products.forEach((product) => productIdsSet.add(Number(product.id_product)));
  const uniqueList: number[] = Array.from(productIdsSet);

  newList.forEach((product) => {
    if (!uniqueList.includes(Number(product.id_product))) {
      products.push(product);
    }
  });

  return products;
};

export const concatenateProductList = (currentList: Cat, newList: Cat) => {
  if (currentList.id_category !== newList.id_category) {
    return newList;
  }

  let products: ProductInterface[] = doConcat(currentList.products, newList.products);

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

  let products: ProductInterface[] = doConcat(currentList.products, newList.products);

  return {
    ...currentList,
    products,
    pagination: { ...newList.pagination },
    facets: { ...newList.facets }
  };
};
