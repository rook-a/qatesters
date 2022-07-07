import { AdaptedTaskToClient, AdaptedTaskFromServer } from '../types/task';
import { TaskLabelForClient, TaskLabelFromServer } from './const';

export const adaptToClient = (tasks: AdaptedTaskFromServer[]): AdaptedTaskToClient[] => {
  return tasks.map((task) => {
    const adaptedTask = {
      ...task,
      orderType: task['order_type'],
      createdUser: task['created_user'],
      createdDate: task['created_date'],
    };

    delete adaptedTask['order_type'];
    delete adaptedTask['created_user'];
    delete adaptedTask['created_date'];

    return adaptedTask;
  });
};

export const formatDate = (date: number) => {
  if (isNaN(date)) {
    return 'Дата неизвестна';
  }

  return new Date(date).toLocaleString('ru', {
    year: 'numeric',
    day: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const adaptLabelToClient = (label: string) => {
  switch (label) {
    case TaskLabelFromServer.New:
      return TaskLabelForClient.New;
    case TaskLabelFromServer.Started:
      return TaskLabelForClient.Started;
    case TaskLabelFromServer.AssignedTo:
      return TaskLabelForClient.AssignedTo;
    case TaskLabelFromServer.Declined:
      return TaskLabelForClient.Declined;
    case TaskLabelFromServer.Completed:
      return TaskLabelForClient.Completed;
    default:
      return TaskLabelForClient.Unknown;
  }
};
