import React from "react";
import TransactionListItem from "./TransactionListItem";
import {TTransaction} from "../types/Transactions";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";


type TTransactionsTable = {
    data: TTransaction[],
    isLoading: boolean,
    error: FetchBaseQueryError | null;
};

const TransactionsTable = ({data, isLoading, error}: TTransactionsTable) => {
    let content;
    if (isLoading) {
        content = <tr>
            <td className="text-black text-3xl p-4" colSpan={6}>Loading data...</td>
        </tr>;
    } else if (error) {
        content = <tr>
            <td className="text-black text-3xl p-4" colSpan={6}>Failed to get data.</td>
        </tr>;
    } else {
        content = data?.map((transaction) => (
            <TransactionListItem key={transaction.id} transaction={transaction}/>
        ));
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="table-auto w-full text-sm text-left text-black dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">#</th>
                    <th className="px-6 py-3">Beneficiary</th>
                    <th className="px-6 py-3">Address</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3"></th>
                </tr>
                </thead>
                <tbody>{content}</tbody>
            </table>
        </div>
    );
};

export default TransactionsTable;
