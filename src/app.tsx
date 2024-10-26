import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccountPage } from "./pages/CreateAccountPage/CreateAccountPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
