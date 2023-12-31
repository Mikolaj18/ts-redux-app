import React, {useMemo, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Balance from "./components/Balance/Balance";
import Filter from "./components/Filter/Filter";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import TransactionsTable from "./components/TransactionsTable/TransactionsTable";
import {useFetchTransactionsQuery} from "./store/api/transactionApi";
import {TTransaction} from "./types/Transactions";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

function App() {
    const { data, error, isLoading } = useFetchTransactionsQuery();
    const [filterEntry, setFilterEntry] = useState<string>("");
    const handleFilterTransactions = (value: React.SetStateAction<string>) => {
        setFilterEntry(value);
    }

    const filteredTransactions = useMemo(
        () => data?.filter(transaction => transaction.beneficiary.toLowerCase().includes(filterEntry.toLowerCase())),
        [data, filterEntry]
    ) as TTransaction[];

    const totalBalance = filteredTransactions?.reduce((total, amount) => total + amount.amount, 0);
    return (
        <>
            <ToastContainer/>
            <main className="mx-auto px-2">
                <Navbar/>
                <div
                    className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between py-2 gap-x-16 items-center md:items-stretch">
                    <div className="flex flex-col justify-between w-full md:w-1/2 gap-y-5 md:gap-y-0">
                        <Balance totalBalance={totalBalance}/>
                        <Filter setFilterEntry={handleFilterTransactions}/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <AddTransaction/>
                    </div>
                </div>
                <div className="container max-w-7xl mx-auto">
                    <TransactionsTable data={filteredTransactions} isLoading={isLoading} error={error as FetchBaseQueryError}/>
                </div>
                <Footer/>
            </main>
        </>
    );
}

export default App;
