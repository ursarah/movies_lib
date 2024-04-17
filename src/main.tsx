import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home.tsx";
import Movie from "./pages/Movie.tsx";
import Search from "./pages/Search.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
