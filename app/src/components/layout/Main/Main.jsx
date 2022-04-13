import { Routes, Route } from 'react-router-dom';
import Category from '../../../pages/Category/Category';
import Error404 from '../../../pages/Error404/Error404';
import Home from '../../../pages/Home/Home';

const Main = () => {
  return (
    <main>
      <div className="page-width">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
