import React from 'react';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUsPage/index';
import Expeditor from '../pages/ExpeditorPage/index';
import Transporteur from '../pages/TransporterPage/index';
import BTP from '../pages/BTPPage/index';
import BlogPage from '../pages/BlogPage';
import PolitiquePage from '../pages/PolitiquePage';
import UserLoginPage from "../pages/UserLoginPage/index";
import ContactPage from "../pages/ContactPage/index";
import Etape2 from "../pages/etape2/Etape2";
//import AuthPage from "./pages/AdminPages/AuthPage";
//import AdminHome from "./pages/AdminPages/AdminHome";
import HomeUserPage from "../pages/UserPages/index";
import OurTeamPage from "../pages/OurTeam/index";
import OurSolutionsPage from "../pages/OurSolutions/index";
import Recrutement from "../pages/Recrutement/index";
import Vehicules from "../pages/UserPages/Partner/index";
import Profile from "../pages/UserPages/Profile/index";
import AuthPage from "../pages/AdminPages/AuthPage";
import {Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {

    const location = useLocation();
  return (
     <AnimatePresence>
          <Routes location={location} key={location.pathname}>
                  <Route path="/"  element={<HomePage />} />
                  <Route path="/Presentation"  element={<AboutUs />} /> 
                  <Route path="/Expediteurs"  element={<Expeditor />} />
                  <Route path="/Etape2"  element={<Etape2 />} /> 
                  <Route path="/Transporteurs"  element={<Transporteur />} /> 
                  <Route path="/BTP"  element={<BTP />} /> 
                  <Route path="/Blog"  element={<BlogPage />} /> 
                  <Route path="/Confidentialites"  element={<PolitiquePage />} /> 
                  <Route path="/Contact"  element={<ContactPage />} /> 
                  <Route path="/Ourteam"  element={<OurTeamPage />} /> 
                  <Route path="/Services"  element={<OurSolutionsPage />} />
                  <Route path="/Recrutement"  element={<Recrutement />} />

                  <Route path="/connexion"  element={<UserLoginPage />} />  
                  <Route path="/Accueil"  element={<HomeUserPage />} />
                  <Route path="/user/vehicules"  element={<Vehicules />} />
                  <Route path="/user/profile"  element={<Profile />} />

                  <Route path="/admin/dashboard/2022/login"  element={<AuthPage />} />  
                  <Route path="/admin/dashboard/2022/Accueil"  element={<AuthPage />} />
                  <Route path="/admin/dashboard/2022/user/vehicules"  element={<AuthPage />} />
                  <Route path="/admin/dashboard/2022/user/profile"  element={<AuthPage />} />
                  
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes