export const CURRENT_PAGE = 1;
export const NUMBER_OF_ENTRIES = 10;

export const enum NameSpace {
  Task = 'Task',
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

export const enum TaskLabelFromServer {
  New = 'new',
  Declined = 'declined',
  AssignedTo = 'assigned_to',
  Started = 'started',
  Completed = 'completed',
}

export const enum TaskLabelForClient {
  New = 'Новое',
  Declined = 'Отменено',
  AssignedTo = 'Назначено',
  Started = 'Выполняется',
  Completed = 'Завершено',
  Unknown = 'Неизвестно',
}
