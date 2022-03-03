import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SuspectPage from "./pages/SuspectsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suspects" element={<SuspectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
