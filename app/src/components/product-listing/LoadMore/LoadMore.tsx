import { CategoryPageInterface } from '../../../model/interfaces';
import { usePsContext } from '../../../hooks/usePsContext';

import './styles.scss';

interface ComponentInterface {
  pagination: CategoryPageInterface['pagination'];
}

const LoadMore = ({ pagination: { current_page, pages_count } }: ComponentInterface) => {
  const { setPage } = usePsContext();
  const loadMore = () => setPage(current_page + 1);

  return (
    <div className="pagination flex flex-column">
      <div className="pagination-info">
        Page <strong>{current_page}</strong> of <strong>{pages_count}</strong>
      </div>
      {current_page < pages_count && (
        <button className="button load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMore;
