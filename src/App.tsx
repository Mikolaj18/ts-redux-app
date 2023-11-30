import React, {useMemo, useState} from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Filter from "./components/Filter";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import TransactionsTable from "./components/TransactionsTable";
import {useFetchTransactionsQuery} from "./store/api/transactionApi";
import {TTransaction} from "./types/Transactions";

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
                    className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between py-2 gap-16 items-center md:items-stretch">
                    <div className="flex flex-col justify-between w-full md:w-1/2 gap-y-5 md:gap-y-0">
                        <Balance totalBalance={totalBalance}/>
                        <Filter setFilterEntry={handleFilterTransactions}/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <AddTransaction/>
                    </div>
                </div>
                <div className="container max-w-7xl mx-auto">
                    <TransactionsTable data={filteredTransactions} isLoading={isLoading} error={error}/>
                </div>
                <Footer/>
            </main>
        </>
    );
}

export default App;
