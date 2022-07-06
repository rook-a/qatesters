import { AdaptedOrderToClient, AdaptedOrderFromServer } from '../types/order';
import { OrderLabelForClient, OrderLabelFromServer } from './const';

export const adaptToClient = (orders: AdaptedOrderFromServer[]): AdaptedOrderToClient[] => {
  return orders.map((order) => {
    const adaptedOrder = {
      ...order,
      orderType: order['order_type'],
      createdUser: order['created_user'],
      createdDate: order['created_date'],
    };

    delete adaptedOrder['order_type'];
    delete adaptedOrder['created_user'];
    delete adaptedOrder['created_date'];

    return adaptedOrder;
  });
};

export const formatDate = (date: number) => {
  if (isNaN(date)) {
    return 'Дата неизвестна';
  }

  return new Date(date).toLocaleString('ru', { year: 'numeric', day: 'numeric', month: 'numeric' });
};

export const adaptLabelToClient = (label: string) => {
  switch (label) {
    case OrderLabelFromServer.New:
      return OrderLabelForClient.New;
    case OrderLabelFromServer.Started:
      return OrderLabelForClient.Started;
    case OrderLabelFromServer.AssignedTo:
      return OrderLabelForClient.AssignedTo;
    case OrderLabelFromServer.Declined:
      return OrderLabelForClient.Declined;
    case OrderLabelFromServer.Completed:
      return OrderLabelForClient.Completed;
    default:
      return OrderLabelForClient.Unknown;
  }
};
