import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Avaliacoes } from "./pages/Avaliacoes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/avaliacoes" element={<Avaliacoes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
