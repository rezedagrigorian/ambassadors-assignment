import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Rules from './pages/Rules';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = (props) => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/readme" element={<Rules />} />
    </Routes>
    <ToastContainer />
  </>
);

export default App;
