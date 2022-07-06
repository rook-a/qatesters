import { useAppSelector } from '../../hooks';
import { selectOrders } from '../../store/order-slice/order-slice';
import OrderItem from './order-item/order-item';

function OrdersList(): JSX.Element {
  const orders = useAppSelector(selectOrders);

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Номер / Дата</th>
          <th>Тип задания / Автор</th>
          <th>Аккаунт / Терминал</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <OrderItem order={order} index={index + 1} key={order.id} />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default OrdersList;
