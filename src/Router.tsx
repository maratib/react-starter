import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import BookLayout from './layouts/BookLayout';


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* Nested Routes */}
      <Route path='/books' element={<BookLayout />}>
        <Route index element={<Books />} />
        <Route path=':id' element={<Book />} />
        <Route path='new' element={<NewBook />} />
      </Route>

      {/* 
      <Route path='/books' element={<Books />} />
      <Route path='/books/:id' element={<Book />} />
      <Route path='/books/new' element={<NewBook />} />
      */}
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
  );
};

export default Router