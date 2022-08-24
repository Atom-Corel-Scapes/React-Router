import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import About from "./About";

function App({ menu }) {
  return (
    <>
      {
        <BrowserRouter>
          {menu.map((item) => (
            <Link to={item}>{item}</Link>
          ))}
          <Routes>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
