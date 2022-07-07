import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  changeNumberOfEntries,
  selectCurrentPage,
  selectNumberOfEntries,
  selectOrders,
  setDecCurrentPage,
  setIncCurrentPage,
  setFirstCurrentPage,
  setLastCurrentPage,
} from '../../store/order-slice/order-slice';

import { CURRENT_PAGE } from '../../utils/const';

import styles from './pagination.module.scss';

function Pagination(): JSX.Element {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const currentPage = useAppSelector(selectCurrentPage);
  const numberOfEntries = useAppSelector(selectNumberOfEntries);
  const isButtonOneStepDisabled = currentPage === CURRENT_PAGE;
  const isButtonDisabled = currentPage === orders.length / numberOfEntries;

  const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const { value } = evt.target;

    dispatch(changeNumberOfEntries(Number(value)));
    dispatch(setFirstCurrentPage());
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <span>записи {`${numberOfEntries}-${orders.length}`}</span>

        <div className={styles['button-group']}>
          <button
            onClick={() => dispatch(setFirstCurrentPage())}
            className={styles.button}
            type='button'
            disabled={isButtonOneStepDisabled}
          >
            &#8810;
          </button>
          <button
            onClick={() => dispatch(setDecCurrentPage())}
            className={styles.button}
            type='button'
            disabled={isButtonOneStepDisabled}
          >
            &lt;
          </button>

          <span>{currentPage}</span>

          <button
            onClick={() => dispatch(setIncCurrentPage())}
            className={styles.button}
            type='button'
            disabled={isButtonDisabled}
          >
            &gt;
          </button>
          <button
            onClick={() => dispatch(setLastCurrentPage())}
            className={styles.button}
            type='button'
            disabled={isButtonDisabled}
          >
            &#8811;
          </button>
        </div>

        <span>по</span>

        <select
          onChange={handleSelectChange}
          className={styles.select}
          name='number-of-entries'
          defaultValue={numberOfEntries}
        >
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
        </select>

        <span>записей</span>
      </div>
    </div>
  );
}

export default Pagination;
