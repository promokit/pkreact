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

const validateText = (value: string): boolean => {
  if (value === '') {
    return false;
  }
  return true;
};

const validateEmail = (value: string): boolean => {
  const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const check = regex.test(value);
  if (value === '' || !check) {
    return false;
  }
  return true;
};

const validatePassword = (value: string): boolean => {
  if (value === '') {
    return false;
  }
  return true;
};

export const validateInput = ({ value, type }: { value: string; type: string }): boolean => {
  if (type === 'text') {
    return validateText(value);
  }
  if (type === 'email') {
    return validateEmail(value);
  }
  if (type === 'password') {
    return validatePassword(value);
  }
  return true;
};

export const isFormValid = (formData: object): boolean => {
  return Object.values(formData).every((item) => item === true);
};
