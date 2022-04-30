import "./App.css";
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./components/auth/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
