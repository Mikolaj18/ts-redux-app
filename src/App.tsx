import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Filter from "./components/Filter";

function App() {
    return (
        <main className="mx-auto px-2">
            <Navbar/>
            <div className="container max-w-4xl mx-auto flex flex-col-reverse md:flex-row justify-between py-2 gap-16 items-center md:items-stretch">
                <div className="flex flex-col justify-between w-full md:w-1/2 gap-y-5 md:gap-y-0">
                    <Balance/>
                    <Filter/>
                </div>
                <div className="w-full md:w-1/2">
                    <AddTransaction/>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default App;
