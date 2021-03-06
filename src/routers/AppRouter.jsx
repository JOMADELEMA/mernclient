import {Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import AddProjectPage from "../pages/AddProjectPage";
import EditProjectPage from "../pages/EditProjectPage";
import NotFoundPage from "../pages/NotFoundPage";
import UsersPage from "../pages/admin/UsersPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ROLES from '../helpers/roles.js'

export default function AppRouter() {
  return (
    <>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/account"
              element={
                <PrivateRoute>
                  <AccountPage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/projects"
              element={
                <PrivateRoute>
                  <ProjectsPage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/project/new-project"
              element={
                <PrivateRoute>
                  <AddProjectPage />
                </PrivateRoute>
              }
            />
            <Route
              
              path="/projects/:id_proyecto"
              element={
                <PrivateRoute>
                  <ProjectPage />
                </PrivateRoute>
              }
            />

            <Route path="/projects/edit/:id_proyecto"
              element={
                <PrivateRoute>
                  <EditProjectPage />
                </PrivateRoute>
              }
            >

            </Route>
            <Route
              exact
              path="/admin/users"
              element={
                <PrivateRoute hasRole={ROLES.admin}>
                  <UsersPage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </>
  );
}

