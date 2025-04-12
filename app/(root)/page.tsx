import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/elements/InterviewCard";
import {
  getCurrentUser,
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();
  if (!user) return;

  const [userInterview, latestInterviews] = await Promise.all([
    getInterviewsByUserId(user.id),
    getLatestInterviews({ userId: user.id }),
  ]);

  const hasPastInterviews = userInterview?.length ?? 0 > 0;
  //these the interviews that are not being created by us but by other users

  const hasUpcomingInterviews = latestInterviews?.length ?? 0 > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>
          <Button className="btn-primary max-sm:w-full" asChild>
            <Link href="/interview">Start an Interview </Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews </h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterview?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You have&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          <div className="interviews-section">
            {hasUpcomingInterviews ? (
              latestInterviews?.map((interview) => (
                <InterviewCard {...interview} key={interview.id} />
              ))
            ) : (
              <p>There are no interviews available</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
