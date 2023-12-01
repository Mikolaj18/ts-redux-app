import React, {useState} from "react";
import TransactionListItem from "../TransactionListItem/TransactionListItem";
import {TTransaction} from "../../types/Transactions";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import ReactPaginate from "react-paginate";


type TTransactionsTable = {
    data: TTransaction[],
    isLoading: boolean,
    error: FetchBaseQueryError | null;
};

const TransactionsTable = ({data, isLoading, error}: TTransactionsTable) => {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data?.length / itemsPerPage);

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
        content = currentItems.map((transaction) => (
            <TransactionListItem key={transaction.id} transaction={transaction} />
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

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousClassName={"pagination-previous"}
                nextClassName={"pagination-next"}
                disabledClassName={"pagination-disabled"}
            />
        </div>
    );
};

export default TransactionsTable;
