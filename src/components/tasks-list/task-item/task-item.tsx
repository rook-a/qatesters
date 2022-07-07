import { generatePath, useNavigate } from 'react-router-dom';

import Label from './label/label';

import { AdaptedTaskToClient } from '../../../types/task';
import { formatDate } from '../../../utils/utils';

import styles from './task-item.module.scss';

interface TaskItemProps {
  task: AdaptedTaskToClient;
  index: number;
  className: string;
}

function TaskItem({ className, task, index }: TaskItemProps): JSX.Element {
  const navigate = useNavigate();

  const { id, status, orderType, terminal, account, createdUser, createdDate } = task;

  const link = generatePath('/task/:id', { id: `${id}` });

  const handleTaskClick = () => {
    navigate(link);
  };

  const handleTaskKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      navigate(link);
    }
  };

  return (
    <tr
      className={`${className} ${styles.task}`}
      tabIndex={0}
      onClick={handleTaskClick}
      onKeyDown={() => handleTaskKeyDown}
    >
      <td aria-label='№'>{index}</td>
      <td aria-label='Номер / Дата'>
        {`№${id}`}
        <br />
        <span>{formatDate(createdDate!)}</span>
      </td>
      <td aria-label='Тип задания / Автор'>
        {orderType?.name}
        <br />
        <span>
          {createdUser?.surname} {createdUser?.name.charAt(0)}. {createdUser?.patronymic.charAt(0)}.
        </span>
      </td>
      <td className={styles.company} aria-label='Аккаунт / Терминал'>
        {account.name}
        <br />
        <span>{terminal.name}</span>
      </td>
      <td aria-label='Статус'>
        <Label status={status} />
      </td>
    </tr>
  );
}

export default TaskItem;
