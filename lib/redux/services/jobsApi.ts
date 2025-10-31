import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define types for job data
export interface Job {
    id: string;
    title: string;
    company: {
        display_name: string;
    };
    location: {
        display_name: string;
        area?: string[];
    };
    description: string;
    created: string;
    salary_min?: number;
    salary_max?: number;
    contract_type?: string;
    redirect_url: string;
    category?: {
        label: string;
        tag: string;
    };
}

export interface JobsResponse {
    results: Job[];
    count: number;
    mean?: number;
}

export interface JobSearchParams {
    query?: string;
    location?: string;
    page?: number;
    resultsPerPage?: number;
    category?: string;
}

export const jobsApi = createApi({
    reducerPath: "jobsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.adzuna.com/v1/api/jobs/us",
        prepareHeaders: (headers) => {
            return headers;
        },
    }),
    endpoints: (builder) => ({
        searchJobs: builder.query<JobsResponse, JobSearchParams>({
            query: ({
                query = "",
                location = "",
                page = 1,
                resultsPerPage = 20,
            }) => {
                const appId = process.env.NEXT_PUBLIC_ADZUNA_APP_ID;
                const appKey = process.env.NEXT_PUBLIC_ADZUNA_APP_KEY;

                const params = new URLSearchParams({
                    app_id: appId || "",
                    app_key: appKey || "",
                    results_per_page: resultsPerPage.toString(),
                    what: query,
                    where: location,
                });

                return `/search/${page}?${params.toString()}`;
            },
        }),
        getJobCategories: builder.query<any, void>({
            query: () => {
                const appId = process.env.NEXT_PUBLIC_ADZUNA_APP_ID;
                const appKey = process.env.NEXT_PUBLIC_ADZUNA_APP_KEY;

                return `/categories?app_id=${appId}&app_key=${appKey}`;
            },
        }),
    }),
});

export const { useSearchJobsQuery, useGetJobCategoriesQuery } = jobsApi;
