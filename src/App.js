import { MGrid } from "./components/MGrid";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";
import { Navbar } from "react-bootstrap";

export function App() {
  return (
    <div>
      <Router>
        <header>
        <Navbar>
        <Link to="/"><h1>Movies</h1></Link>
          
          <Link to="/login">Home</Link>

          <Link to="/registro">Movielogin</Link>

          <Link to="/movie">Moviedetalles</Link>
        </Navbar>
        </header>
        <main>
        <Routes>
          <Route exact path="/login" element={<LandingPage />} />

          <Route exact path="/registro" element={<LandingPage />} />

          <Route exact path="/movie/:movieId" element={<MovieDetails />} />

          <Route path="/*" element={<LandingPage />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}
