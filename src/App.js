import React from "react";
import { Routes, Route } from "react-router-dom";

import EnvelopePage from "./pages/EnvelopePage";
import MainPage2 from "./pages/MainPage2";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EnvelopePage />} />
      <Route path="/invite-details" element={<MainPage2 />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
