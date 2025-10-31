"use client";

import { Button } from "@/components/ui/button";
import { useSearchJobsQuery } from "@/lib/redux/services/jobsApi";
import { useState } from "react";

export default function JobSearch() {
  const [query, setQuery] = useState("developer");
  const [location, setLocation] = useState("san francisco");
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isFetching } = useSearchJobsQuery({
    query,
    location,
    page,
    resultsPerPage: 10,
  });
  console.log('data :- ',data)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold">Job Search</h2>

      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-dark-200 text-white border border-input"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-dark-200 text-white border border-input"
          />
          <Button
            type="submit"
            className="w-fit bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full font-bold px-5 cursor-pointer min-h-10"
          >
            Search
          </Button>
        </div>
      </form>

      {isLoading && <p>Loading jobs...</p>}
      {error && <p className="text-destructive-100">Error loading jobs</p>}

      {data && (
        <>
          <p className="text-light-100">
            Found {data.count} jobs {isFetching && "(updating...)"}
          </p>

          <div className="flex flex-col gap-4">
            {data.results.map((job) => (
              <div
                key={job.id}
                className="border-gradient p-0.5 rounded-2xl w-full"
              >
                <div className="dark-gradient rounded-2xl p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-primary-200">
                    {job.company.display_name}
                  </p>
                  <p className="text-light-100">
                    {job.location.display_name}
                  </p>
                  {job.salary_min && job.salary_max && (
                    <p className="text-success-100">
                      ${job.salary_min.toLocaleString()} - $
                      {job.salary_max.toLocaleString()}
                    </p>
                  )}
                  <p className="text-light-100 line-clamp-3">
                    {job.description.replace(/<[^>]*>/g, "")}
                  </p>
                  <Button
                    asChild
                    className="w-fit bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full font-bold px-5 cursor-pointer min-h-10"
                  >
                    <a
                      href={job.redirect_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Job
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-fit bg-dark-200 text-primary-200 hover:bg-dark-200/80 rounded-full font-bold px-5 cursor-pointer min-h-10"
            >
              Previous
            </Button>
            <span className="flex items-center text-light-100">
              Page {page}
            </span>
            <Button
              onClick={() => setPage((p) => p + 1)}
              className="w-fit bg-dark-200 text-primary-200 hover:bg-dark-200/80 rounded-full font-bold px-5 cursor-pointer min-h-10"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
