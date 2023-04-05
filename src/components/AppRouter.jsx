import { Routes, Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import Main from '../pages/Main';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';
import SinglePostPage from '../pages/SinglePostPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<SinglePostPage />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
