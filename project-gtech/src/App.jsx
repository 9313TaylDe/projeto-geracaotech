import "./App.css";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import React from "react";
import CreateAccount from "./pages/CreateAccount";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./components/AuthContext";
import RouteProtected from "./routes/RouteProtected";
import ProductShow from "./components/ProductShow";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<RouteProtected element={<Home />} />} />
          <Route path="/criar-nova-conta" element={<CreateAccount />} />
          <Route path="/produtos" element={<ProductShow />} />
          <Route
            path="/meu-perfil"
            element={<RouteProtected element={<ProfilePage />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
