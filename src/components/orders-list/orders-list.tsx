import { useAppSelector } from '../../hooks';
import { selectCurrentOrders } from '../../store/order-slice/order-slice';
import OrderItem from './order-item/order-item';

import styles from './order-list.module.scss';

function OrdersList(): JSX.Element {
  const orders = useAppSelector(selectCurrentOrders);

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          <th>№</th>
          <th>Номер / Дата</th>
          <th>Тип задания / Автор</th>
          <th>Аккаунт / Терминал</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <OrderItem className={styles.row} order={order} index={index + 1} key={order.id} />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default OrdersList;
