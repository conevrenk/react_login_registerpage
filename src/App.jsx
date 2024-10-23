import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
