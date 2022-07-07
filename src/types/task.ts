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

export interface Task {
  id: number;
  oguid: string;
  status: string;
  terminal: Terminal;
  account: Account;
}

export interface AdaptedTaskFromServer extends Task {
  order_type?: OrderType;
  created_user?: CreatedUser;
  created_date?: number;
}

export interface AdaptedTaskToClient extends Task {
  orderType?: OrderType;
  createdUser?: CreatedUser;
  createdDate?: number;
}
