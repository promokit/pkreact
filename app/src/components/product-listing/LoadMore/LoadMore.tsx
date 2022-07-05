import { MouseEvent } from 'react';
import { CategoryPageInterface } from '../../../model/interfaces';

import Button from '../../forms/Button/Button';

import './styles.scss';

interface ComponentInterface {
  setPage: (num: number) => void;
  pagination: CategoryPageInterface['pagination'];
  disabled: boolean;
}

const LoadMore = ({
  pagination: { current_page, pages_count },
  disabled,
  setPage
}: ComponentInterface) => {
  const loadMore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPage(current_page + 1);
  };

  return (
    <div className="pagination flex flex-column">
      <div className="pagination-info">
        Page <strong>{current_page}</strong> of <strong>{pages_count}</strong>
      </div>
      {current_page < pages_count && (
        <Button title="Load More" clickHandler={loadMore} disabled={disabled} />
      )}
    </div>
  );
};

export default LoadMore;
