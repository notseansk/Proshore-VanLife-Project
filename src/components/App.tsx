import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VanDetails from "./VanDetails";
import Layout from "./Layout";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";
import HostLayout from "../pages/Host/HostLayout";
import HostVans from "../pages/Host/HostVans";
// import HostVanDetails from "../pages/Host/HostVanDetails";
import HostVanDetailsText from "../pages/Host/HostVanDetailsText";
import HostVanDetailsPricing from "../pages/Host/HostVanDetailsPricing";
import HostVanDetailsPhotos from "../pages/Host/HostVanDetailsPhotos";
import HostVansDetailsLayout from "../pages/Host/HostVanDetailsLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetailsLayout />}>
              <Route index element={<HostVanDetailsText />} />
              <Route path="pricing" element={<HostVanDetailsPricing />} />
              <Route path="photos" element={<HostVanDetailsPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
