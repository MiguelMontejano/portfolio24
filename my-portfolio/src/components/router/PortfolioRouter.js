import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import React from 'react'
import { Home } from "../home/home";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";
import { Error } from "../error/Error";
import { Header } from "../header/header";

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
