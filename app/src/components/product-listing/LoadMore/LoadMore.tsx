import { useDispatch } from 'react-redux';
import { CategoryInterface } from '../../../model/interfaces';
import { setProductListingPage } from '../../../providers/context/context.actions';
import { AppDispatch } from '../../../providers/store';

import './styles.scss';

interface ComponentInterface {
  pagination: CategoryInterface['pagination'];
}

const LoadMore: React.FC<ComponentInterface> = ({
  pagination: { current_page, pages_count }
}): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="pagination flex flex-column">
      <div className="pagination-info">
        Page <strong>{current_page}</strong> of <strong>{pages_count}</strong>
      </div>
      {current_page < pages_count && (
        <button
          className="button load-more-btn"
          onClick={() => dispatch(setProductListingPage(current_page + 1))}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMore;
