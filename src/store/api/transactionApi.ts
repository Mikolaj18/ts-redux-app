import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {TTransaction} from "../../types/Transactions";

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
    }),
});