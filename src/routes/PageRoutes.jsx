import { Route, Routes } from "react-router-dom";
import route from "../routes/route.json";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<HomePage />} />
      <Route path={route.ABOUT} element={<AboutPage />} />
      <Route path={route.SERVICES} element={<ServicesPage />} />
      <Route path={route.CONTACT_US} element={<ContactPage />} />
      <Route path={route.SIGNUP} element={<SignupPage />} />
      <Route path={route.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};
export default PageRoutes;
