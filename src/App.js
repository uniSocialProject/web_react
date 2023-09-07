import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
