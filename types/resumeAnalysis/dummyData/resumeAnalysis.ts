import {
  ResumeAnalysisReviewTabDataType,
  ResumeAnalysisReviewTabViewDataType,
  SectionDataType,
} from "@/types";

export const ResumeAnalysisReviewTabsData: ResumeAnalysisReviewTabDataType[] = [
  { id: 1, label: "Instant Resume Review", value: "instant-resume-review" },
  { id: 2, label: "Resume Samples", value: "resume-samples" },
  { id: 3, label: "Resume Targeting", value: "resume-targeting" },
  { id: 4, label: "Linkedin Optimization", value: "linkedin-optimization" },
];
export const ResumeAnalysisReviewTabScreenData: ResumeAnalysisReviewTabViewDataType[] = [
  {
    id: 1,
    title: "Get expert feedback on your resume, instantly",
    subTitle: `Score My Resume scores your resume on key criteria recruiters and hiring managers look for. Upload your resume and in just 30 seconds, you'll get actionable steps to revamp your resume and land more interviews.`,
    image: "/assets/searchJob/resume.png",
    ctaLabel: "Upload Resume",
  },
  {
    id: 2,
    title: "Examples from top resumes",
    subTitle: `Successful job applicants have already spent hours crafting the perfect resume lines that got them interviews at top-tier companies. Find a line similar to your own experience, tweak it and use it in your resume.`,
    image: "/assets/resumeAnalysis/targeted-resume.png",
    ctaLabel: "See resume samples",
  },
  {
    id: 3,
    title: "Get expert feedback on your resume, instantly",
    subTitle: `Scorde My Resume scores your resume on key criteria recruiters and hiring managers look for. Upload your resume and in just 30 seconds, you'll get actionable steps to revamp your resume and land more interviews.`,
    image: "/assets/resumeAnalysis/targeted-resume.png",
    ctaLabel: "Target your resume",
  },
  {
    id: 4,
    title: "Get expert feedback on your resume, instantly",
    subTitle: `Scorde My Resume scores your resume on key criteria recruiters and hiring managers look for. Upload your resume and in just 30 seconds, you'll get actionable steps to revamp your resume and land more interviews.`,
    image: "/assets/resumeAnalysis/linkedin-showcase.png",
    ctaLabel: "Optimize LinkedIn Profile",
  },
];

//resumeAnalysisHomeAboutUs

export const ResumeAnalysisHomeAboutUsData: SectionDataType[] = [
  {
    id: 1,
    title: "Write and improve your resume",
    subTitle: `Struggling to write your resume? Don't worry. We have over 250+ sample bullet points from top resumes across all industries and skills. Use our templates and sample lines to quickly write an effective resume from scratch.`,
    description: `With Score My Resume, you can improve your resume one upload at a time. Unlike any other tool, you get specific feedback on your resume's content, including on each bullet point.`,
    imgSrc: "/assets/resumeAnalysis/aboutUs/writeAndImproveCV.png",
    ctaLabel: "Upload Resume",
  },
  {
    id: 2,
    title: "Proven to land top jobs",
    subTitle: `Resume Worded has helped hundreds of people land jobs at top companies like PwC, Google, Amazon and Credit Suisse.`,
    description: `Our AI-powered technologies have been designed by real hiring managers and provides actionable feedback on your LinkedIn profile and resume.`,
    imgSrc: "/assets/resumeAnalysis/aboutUs/provenToLandJob.png",
  },
  {
    id: 3,
    title: "Optimize your job search funnel",
    subTitle: `Let's say you apply to or get contacted by a recruiter for 50 job openings. Out of those, your resume might get you 5 interviews, and out of those, you may end up getting one job offer.`,
    description: `Resume Worded optimizes this job search funnel. With LinkedIn Review, you'll get contacted by more recruiters for more jobs on LinkedIn, thus widening the top part of the funnel. With our resume tools, you'll then be able to ensure you are maximizing the conversion of those jobs to interviews.`,
    imgSrc: "/assets/resumeAnalysis/aboutUs/optimizeJobSearch.png",
    ctaLabel: "Optimize your LinkedIn profile",
  },
];
