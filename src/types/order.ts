export interface OrderType {
  name: string;
  oguid: string;
}

export interface Terminal {
  name: string;
  oguid: string;
}

export interface Account {
  name: string;
  oguid: string;
}

export interface CreatedUser {
  surname: string;
  name: string;
  patronymic: string;
  oguid: string;
}

export interface Order {
  id: number;
  oguid: string;
  status: string;
  terminal: Terminal;
  account: Account;
}

export interface AdaptedOrderFromServer extends Order {
  order_type?: OrderType;
  created_user?: CreatedUser;
  created_date?: number;
}

export interface AdaptedOrderToClient extends Order {
  orderType?: OrderType;
  createdUser?: CreatedUser;
  createdDate?: number;
}
