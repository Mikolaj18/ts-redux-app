import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTransaction from "./components/AddTransaction";

function App() {
    return (
        <main className="mx-auto px-2">
            <Navbar/>
            <div className="container max-w-4xl mx-auto flex justify-center gap-3 py-2">
                <p>container 1container 1container 1container 1container 1container 1container 1container 1container 1container 1</p>
                <AddTransaction/>
            </div>
            <Footer/>
        </main>
    );
}

export default App;
