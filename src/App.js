import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className='container pt-4'>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}
