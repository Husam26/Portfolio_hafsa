import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // navbar import
import HomePage from "./pages/HomePage";
import Sem1 from "./pages/Sem1";
import Sem2 from "./pages/Sem2";
import Sem3 from "./pages/Sem3";
import Sem4 from "./pages/Sem4";

export default function App() {
  return (
    <Router>
      {/* Navbar har page par visible rahega */}
      <Navbar />

      {/* Pages switch honge yaha */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sem-1" element={<Sem1 />} />
        <Route path="/sem-2" element={<Sem2 />} />
        <Route path="/sem-3" element={<Sem3 />} />
        <Route path="/sem-4" element={<Sem4 />} />
      </Routes>
    </Router>
  );
}
