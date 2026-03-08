import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">

      {/* Mobile Device Frame */}
      <div className="w-[375px] h-[812px] bg-white rounded-[30px] shadow-2xl overflow-hidden">

        {/* Status bar */}
        <div className="flex justify-between text-xs px-4 py-2 bg-gray-100">
          <span>9:41</span>
          <span>📶 🔋</span>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;