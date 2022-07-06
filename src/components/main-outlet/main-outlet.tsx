import { Outlet } from 'react-router-dom';

import Footer from './footer/footer';
import Header from './header/header';

import styles from './main-outlet.module.scss';

function MainOutlet(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainOutlet;
