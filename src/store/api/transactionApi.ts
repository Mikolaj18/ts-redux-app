import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {TTransaction} from "../../types/Transactions";

type TPostTransaction = Omit<TTransaction, "id">;
export const transactionApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints: (builder) => ({
        fetchTransactions: builder.query<TTransaction[], void>({
            query: () => ({
                url: '/transactions',
            }),
        }),
        addTransaction: builder.mutation<TTransaction, TPostTransaction>({
            query: (body) => ({
                url: '/transactions',
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