import { useSelector } from 'react-redux';
import { AppState } from '../../../../providers/store';
import { ProductPageComponentInterface } from '../../../../model/interfaces';

interface ComponentInterface {
  short?: boolean;
  full?: boolean;
}

const ProductPageDescription: React.FC<ComponentInterface> = ({
  short = true,
  full = false
}): JSX.Element => {
  const {
    product: {
      details: { description_short, description }
    }
  } = useSelector<AppState, ProductPageComponentInterface>((state) => state.pages);

  return (
    <>
      {short && <p className="product-desc-short">{description_short}</p>}
      {full && <p className="product-desc-full">{description}</p>}
    </>
  );
};

export default ProductPageDescription;
