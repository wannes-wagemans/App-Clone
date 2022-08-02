import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ForgotPassword } from './pages/ForgotPassword';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Settings } from './pages/Settings';
import { Register } from './pages/Register';
import { Users } from './pages/Users';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<Users />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
