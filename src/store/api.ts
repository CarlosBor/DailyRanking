import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import type { ScoreData } from "../types";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        submitScore: builder.mutation<void, string>({
            query: (pastedScore) => ({
                url: '/scores',
                method: "POST",
                body: { pastedScore },
            }),
        }),
        retrieveScores: builder.query<void, ScoreData>({
            query: () => ({
                url: '/scores',
                method: "GET",
            }),
        }),
    }),
});

export const {
    useSubmitScoreMutation,
    useRetrieveScoresQuery
} = api;