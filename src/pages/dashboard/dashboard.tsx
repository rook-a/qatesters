import TasksList from '../../components/tasks-list/tasks-list';
import Pagination from '../../components/pagination/pagination';

function Dashboard(): JSX.Element {
  return (
    <>
      <TasksList />
      <Pagination />
    </>
  );
}

export default Dashboard;
