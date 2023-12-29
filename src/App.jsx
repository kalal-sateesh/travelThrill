import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";
import AppFooter from "./components/AppFooter/AppFooter";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppHeader />
        <main>
          <PageRoutes />
        </main>
        <AppFooter />
      </AuthProvider>
    </div>
  );
}

export default App;
