import HomePage from "./pages/homePage/homePage";
import RedirectPage from "./pages/redirectPage/redirectPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:url" element={<RedirectPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
