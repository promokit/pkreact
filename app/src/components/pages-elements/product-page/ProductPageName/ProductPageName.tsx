import { useSelector } from 'react-redux';
import { AppState } from '../../../../providers/store';
import { ProductPageComponentInterface } from '../../../../model/interfaces';

const ProductPageName: React.FC = (): JSX.Element => {
  const {
    product: {
      details: { name }
    }
  } = useSelector<AppState, ProductPageComponentInterface>((state) => state.pages);

  return <h2>{name}</h2>;
};

export default ProductPageName;
