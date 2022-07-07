import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchTasks, selectCurrentTasks } from '../../store/task-slice/task-slice';

import TaskItem from './task-item/task-item';

import styles from './tasks-list.module.scss';

function TasksList(): JSX.Element {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectCurrentTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          <th>№</th>
          <th>Номер / Дата</th>
          <th>Тип задания / Автор</th>
          <th>Аккаунт / Терминал</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskItem className={styles.row} task={task} index={index + 1} key={task.id} />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default TasksList;
