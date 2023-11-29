import React from "react";
import { useFetchTransactionsQuery } from "../store/api/transactionApi";
import TransactionListItem from "./TransactionListItem";
import { TTransaction } from "../types/Transactions";

const TransactionsTable = () => {
    const { data, error, isLoading } = useFetchTransactionsQuery();

    let content;
    if (isLoading) {
        content = <tr><td colSpan={6}>Loading data...</td></tr>;
    } else if (error) {
        content = <tr><td colSpan={6}>Failed to get data.</td></tr>;
    } else {
        content = data?.map((transaction) => (
            <TransactionListItem key={transaction.id} transaction={transaction} />
        ));
    }

    return (
        <table className="table-auto w-full text-center">
            <thead>
            <tr>
                <th>#</th>
                <th>Beneficiary</th>
                <th>Address</th>
                <th>Date</th>
                <th>Description</th>
                <th></th>
            </tr>
            </thead>
            <tbody>{content}</tbody>
        </table>
    );
};

export default TransactionsTable;
