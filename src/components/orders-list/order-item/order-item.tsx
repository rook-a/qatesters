import Label from '../../label/label';

import { AdaptedOrderToClient } from '../../../types/order';
import { formatDate } from '../../../utils/utils';

import styles from './order-item.module.scss';

interface OrderItemProps {
  order: AdaptedOrderToClient;
  index: number;
  className: string;
}

function OrderItem({ className, order, index }: OrderItemProps): JSX.Element {
  const { id, status, orderType, terminal, account, createdUser, createdDate } = order;

  return (
    <tr className={className}>
      <td>{index}</td>
      <td>
        {`№${id}`}
        <br />
        <span>{formatDate(createdDate!)}</span>
      </td>
      <td>
        {orderType?.name}
        <br />
        <span>
          {createdUser?.surname} {createdUser?.name.charAt(0)}. {createdUser?.patronymic.charAt(0)}.
        </span>
      </td>
      <td className={styles.company}>
        {account.name}
        <br />
        <span>{terminal.name}</span>
      </td>
      <td>
        <Label status={status} />
      </td>
    </tr>
  );
}

export default OrderItem;
