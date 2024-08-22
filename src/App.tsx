import {
  Route,
  Routes,
   useNavigate
} from "react-router-dom";
import './index.css';
import AppContainer from "@/components/AppContainer";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import VerifyEmail from "@/pages/VerifyEmail";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import Notfound from '@/pages/Notfound';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Projects from '@/pages/Projects';
import { setNavigate } from "@/lib/navigation";

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
