import { Route, Routes } from 'react-router-dom';

import { CourseInfo, Home } from '../pages';
import { RouteConfig } from '../types';

const routes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/courses/:courseId', element: <CourseInfo /> },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
