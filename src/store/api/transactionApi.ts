import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TTransaction} from "../../types/Transactions";

type TPostTransaction = Omit<TTransaction, "id">;
export const transactionApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    tagTypes: ['Transaction'],
    endpoints: (builder) => ({
        fetchTransactions: builder.query<TTransaction[], void>({
            query: () => ({
                url: '/transactions',
            }),
        }),
        addTransaction: builder.mutation<TTransaction, TPostTransaction>({
            invalidatesTags: (result, error, user) => [{type: 'Transaction'}],
            query: (body) => ({
                url: '/transactions5yt',
                method: 'POST',
                body,
            }),
        }),
        removeTransaction: builder.mutation<void, TTransaction>({
            query: (transaction) => ({
                url: `/transactions/${transaction.id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useFetchTransactionsQuery,
    useAddTransactionMutation,
    useRemoveTransactionMutation,
} = transactionApi;