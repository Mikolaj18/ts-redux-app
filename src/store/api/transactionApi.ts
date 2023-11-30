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
            providesTags: (result, error, arg) => [{type: 'Transaction'}],
            query: () => ({
                url: '/transactions',
            }),
        }),
        addTransaction: builder.mutation<TTransaction, TPostTransaction>({
            invalidatesTags: (result, error, arg) => [{type: 'Transaction'}],
            query: (body) => ({
                url: '/transactions',
                method: 'POST',
                body,
            }),
        }),
        removeTransaction: builder.mutation<void, TTransaction>({
            invalidatesTags: (result, error, arg) => [{type: 'Transaction'}],
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