import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Title/Title";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GlobalContextProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Projets from "./components/Projets/Projets";
import Footer from "./components/Footer/Footer";

function App() {
    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <BrowserRouter>
                <GlobalContextProvider>
                    <NavBar />
                    <Title />
                    <Routes>
                        <Route path="/" element={<Cards />}/>
                        <Route path="/description" element={<DescriptionCard />}/>
                        <Route path="/technologies" element={<Technologies/>}/>
                        <Route path="/projets" element={<Projets/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>    
                    <Footer/>
                </GlobalContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
