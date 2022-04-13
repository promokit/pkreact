import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestCategoryPage } from '../../rest/rest';
import { CategoryInterface, NotificationInterface, ProductInterface } from '../../model/interfaces';
import NormalProductList from '../../components/product-listing/NormalProductList/NormalProductList';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notifications, {
  defaultMessages
} from '../../components/notifications/Notifications/Notifications';

import './styles.scss';

const Category: React.FC = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState<boolean>(false);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);
  const [categoryProducts, setCategoryProducts] = useState<ProductInterface[]>([]);
  const [category, setCategory] = useState<CategoryInterface>();

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const { success, psdata } = await getRestCategoryPage(Number(id));
        setCategory(psdata);
        success
          ? setCategoryProducts(psdata.products)
          : setMessage((msg) => ({ ...msg, info: 'Search request is not succeeded' }));
        psdata.products.length === 0
          ? setMessage((msg) => ({ ...msg, info: 'No products...' }))
          : setMessage((msg) => ({ ...msg, info: '' }));
      } catch (error) {
        setMessage((msg) => ({ ...msg, error: 'Server error' }));
      } finally {
        setLoader(false);
      }
    })();
  }, [id]);

  if (loader) return <ComponentLoader />;

  return (
    <>
      <div className="category-block">
        <img
          src={category?.images.medium.url}
          width={category?.images.medium.width}
          height={category?.images.medium.height}
          alt={category?.label}
          className="img"
        />
        <h2>{category?.label}</h2>
        <p>{category?.description}</p>
      </div>
      <Notifications message={msg} />
      <NormalProductList products={categoryProducts} />
    </>
  );
};

export default Category;
