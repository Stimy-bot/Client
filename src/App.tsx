import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
// eslint-disable-next-line import/extensions
import AppContainer from '@/components/AppContainer';
// eslint-disable-next-line import/extensions
import Register from '@/pages/Register';
// eslint-disable-next-line import/extensions
import Login from '@/pages/Login';
// eslint-disable-next-line import/extensions
import VerifyEmail from '@/pages/VerifyEmail';
// eslint-disable-next-line import/extensions
import ForgotPassword from '@/pages/ForgotPassword';
// eslint-disable-next-line import/extensions
import ResetPassword from '@/pages/ResetPassword';
// eslint-disable-next-line import/extensions
import Profile from '@/pages/Profile';
// eslint-disable-next-line import/extensions
import Settings from '@/pages/Settings';
// eslint-disable-next-line import/extensions
import Notfound from '@/pages/Notfound/';
// eslint-disable-next-line import/extensions
import About from '@/pages/About';
// eslint-disable-next-line import/extensions
import Contact from '@/pages/Contact';
// eslint-disable-next-line import/extensions
import Projects from '@/pages/Projects';
// eslint-disable-next-line import/extensions
import { setNavigate } from '@/lib/navigation';
// eslint-disable-next-line import/extensions
// import Header from '@/components/Header/Header';
// import Footer from './components/Footer/Footer';

function App() {
  // set the navigate function on our API client for use in the axios error interceptor
  // this allows us to redirect to the login page when an auth error occurs
  const navigate = useNavigate();
  setNavigate(navigate);
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/email/verify/:code" element={<VerifyEmail />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset" element={<ResetPassword />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
