import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
    <div className="flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8">
      <section className="flex flex-row blue-gradient-dark rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">Practice on real interview questions & get instant feedback</p>
          <Button className="w-fit bg-primary-200 text-dark-100 hover:bg-primary-200/80 rounded-full font-bold px-5 cursor-pointer min-h-10 max-sm:w-full" asChild>
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
        <div className="flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch">
          {hasPastInterviews ? (
            userInterview?.map((interview: any) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You have&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2 className="">Take an Interview</h2>
        <div className="flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch">
          <div className="flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch">
            {hasUpcomingInterviews ? (
              latestInterviews?.map((interview: any) => (
                <InterviewCard {...interview} key={interview.id} />
              ))
            ) : (
              <p>There are no interviews available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
