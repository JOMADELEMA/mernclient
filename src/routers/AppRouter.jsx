import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import NotFoundPage from "../pages/NotFoundPage";
import UsersPage from "../pages/admin/UsersPage";

import Navigation from "../components/Navigation";
import Layout from "../components/layouts/Layout";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/account" element={<AccountPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route exact path="/project/:projectId" element={<ProjectPage />} />
            <Route exact path="/admin/users" element={<UsersPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

//Ejemplo de uso de rutas
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// <Router>
//   <Routes>
//     <Route exact path="/" element={<Index />} />
//     <Route path="/aboutus" element={<AboutMe />} />
//     <Route path="/contactus" element={<Contacto />} />
//     <Route path="/proyectos" element={<Proyectos />} />
//     <Route path="/shieldui" element={<ShieldUI />} />
//   </Routes>
// </Router>;
