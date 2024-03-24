import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import AppBar from 'layouts/AppBar';

const Home = lazy(() => import('../../pages/Home'));
const Catalog = lazy(() => import('../../pages/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
