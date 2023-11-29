import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="mx-auto px-2">
            <Navbar/>
            <Footer/>
        </main>
    );
}

export default App;
