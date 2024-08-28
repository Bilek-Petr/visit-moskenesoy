import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import BannerVideo from "./components/Hero/BannerVideo";
import Destinations from "./components/Hero/Destinations";

// Pages
import Home from "./pages/Home";
import Reine from "./pages/Reine";
import Reinebringen from "./pages/Reinebringen";
import Kvalvika from "./pages/Kvalvika";
import Fjords from "./pages/Fjords";
import Hamnoy from "./pages/Hamnoy";
import NotFound from "./pages/NotFound";

function App() {
  const [isDestinationActive, setIsDestinationActive] = useState(false);

  const toggleDestinations = () => {
    setIsDestinationActive((prev) => !prev);
  };

  return (
    <>
      <Navbar
        toggleDestinations={toggleDestinations}
        isDestinationActive={isDestinationActive}
      />

      {isDestinationActive && (
        <Destinations
          toggleDestinations={toggleDestinations}
          isVisible={isDestinationActive}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reine" element={<Reine />} />
        <Route path="/reinebringen" element={<Reinebringen />} />
        <Route path="/kvalvika" element={<Kvalvika />} />
        <Route path="/fjords" element={<Fjords />} />
        <Route path="/hamnoy" element={<Hamnoy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
