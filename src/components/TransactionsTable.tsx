import React from "react";
import TransactionListItem from "./TransactionListItem";
import { TTransaction } from "../types/Transactions";

type TTransactionsTable = {
    data: TTransaction[],
    isLoading: boolean,
    error: any,
};

const TransactionsTable = ({ data, isLoading, error }: TTransactionsTable) => {
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
