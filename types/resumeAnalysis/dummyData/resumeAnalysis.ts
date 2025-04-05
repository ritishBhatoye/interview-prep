import { ResumeAnalysisReviewTabDataType, ResumeAnalysisReviewTabViewDataType } from "@/types";

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
