import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import About from "./components/AboutPage";
import Blogs from "./components/PostPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* Add a route for individual blog posts */}
        <Route path="/post/:id" element={<Blogs />} />
        {/* <Route path="/post/:id" element={< About/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
