import { AdaptedOrderToClient } from '../../../types/order';
import { adaptLabelToClient, formatDate } from '../../../utils/utils';

interface OrderItemProps {
  order: AdaptedOrderToClient;
  index: number;
}

function OrderItem({ order, index }: OrderItemProps): JSX.Element {
  const { id, status, orderType, terminal, account, createdUser, createdDate } = order;

  return (
    <tr>
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
      <td>
        {account.name}
        <br />
        <span>{terminal.name}</span>
      </td>
      <td>{adaptLabelToClient(status)}</td>
    </tr>
  );
}

export default OrderItem;
