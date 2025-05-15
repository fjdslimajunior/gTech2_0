import React, { Suspense, lazy} from "react";
//import Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";

// Lazy load das páginas
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contacts = lazy(() => import("../pages/Contacts"));
const ContentOne = lazy(() => import("../pages/ContentOne"));
const NotFound = lazy(() => import("../pages/NotFound"));

//Import pages
// import Home from "../pages/Home";
// import Contacts from "../pages/Contacts";
// import About from "../pages/About";
// import PageLayout from "../layouts/PageLayout";
// import NotFound from "../pages/NotFound";
// import ContentOne from "../pages/ContentOne";

//import Components
// import Header from "../components/Header";
// import Main from "../components/Main";
// import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Charging...</div>}></Suspense>

      {/* Estrutura */}
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>

          {/* Usei o useParams na ContentOne.jsx */}
          <Route path="/ContentOne/:id/:name" element={<ContentOne />}></Route>
        </Route>

        {/* return erro for page not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
