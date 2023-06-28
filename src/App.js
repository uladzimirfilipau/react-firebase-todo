import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className='container pt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}
