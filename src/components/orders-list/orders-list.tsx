import { useAppSelector } from '../../hooks';
import { selectOrders } from '../../store/order-slice/order-slice';
import { adaptLabelToClient, formatDate } from '../../utils/utils';

function OrdersList(): JSX.Element {
  const orders = useAppSelector(selectOrders);

  return (
    <ul>
      {orders.map(({ id, status, orderType, terminal, account, createdUser, createdDate }) => (
        <li key={id}>
          <p>{`№${id} ${formatDate(createdDate!)}`}</p>
          <p>
            {orderType?.name} {createdUser?.surname} {createdUser?.name.charAt(0)}. {createdUser?.patronymic.charAt(0)}.
          </p>
          <p>
            {account.name} {terminal.name}
          </p>
          <span>{adaptLabelToClient(status)}</span>
        </li>
      ))}
    </ul>
  );
}

export default OrdersList;
