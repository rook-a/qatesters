import { Outlet } from 'react-router-dom';

function MainOutlet(): JSX.Element {
  return (
    <div className='container'>
      <header>header</header>
      <main className='page-content'>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default MainOutlet;
