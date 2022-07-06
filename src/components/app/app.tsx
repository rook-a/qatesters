import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

import Spinner from '../spinner/spinner';

const MainOutlet = lazy(() => import('../main-outlet/main-outlet'));
const Dashboard = lazy(() => import('../../pages/dashboard/dashboard'));
const NotFound = lazy(() => import('../../pages/not-found/not-found'));

function App(): JSX.Element {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainOutlet />}>
          <Route index element={<Dashboard />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
