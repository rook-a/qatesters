import OrdersList from '../../components/orders-list/orders-list';
import Pagination from '../../components/pagination/pagination';

function Dashboard(): JSX.Element {
  return (
    <>
      <OrdersList />
      <Pagination />
    </>
  );
}

export default Dashboard;
