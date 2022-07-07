export const CURRENT_PAGE = 1;
export const NUMBER_OF_ENTRIES = 10;

export const enum NameSpace {
  Order = 'Order',
}

export const enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected',
}

export const enum AppRoute {
  Root = '/',
  NotFound = '*',
}

export const enum OrderLabelFromServer {
  New = 'new',
  Declined = 'declined',
  AssignedTo = 'assigned_to',
  Started = 'started',
  Completed = 'completed',
}

export const enum OrderLabelForClient {
  New = 'Новое',
  Declined = 'Отменено',
  AssignedTo = 'Назначено',
  Started = 'Выполняется',
  Completed = 'Завершено',
  Unknown = 'Неизвестно',
}
