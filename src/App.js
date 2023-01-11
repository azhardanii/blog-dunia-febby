import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
    <Routes>
      <Route path='*' element={<Header />} />
    </Routes>
    <Routes> 
        <Route path='/' element={<Home />} />          
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<Article />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    <Routes>
      <Route path='*' element={<Footer />} />
      <Route path='*' element={<ScrollUp />} />
    </Routes>
    </>
  )
}

export default App;
