import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LinkedInCallback from "./pages/LinkedInCallback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/linkedin/callback"
          element={<LinkedInCallback />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;