import "./App.css";
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./components/auth/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Container fluid className="contenedor-master"></Container>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
