import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import SearchPage from '../views/SearchPage/SearchPage';

export type Permissions = 'AttendanceManager';
function MainPage() {

  return (
    <main>
      <div>
          <Outlet />
      </div>
    </main>
  );
}

export const RoutesComponent: FC = () => {
  return (
    <>
    <Routes>
        <Route
          path="/"
          element={<MainPage />}
        >
          <Route index element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
};
