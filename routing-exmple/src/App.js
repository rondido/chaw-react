import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import RouterTest from "./components/RouterTest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        App 페이지
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
        <RouterTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
