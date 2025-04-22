import { SearchFilterDataType } from "@/types/searchJob";

export const searchFilterOptions: SearchFilterDataType[] = [
  {
    id: 1,
    label: "Working schedule",
    options: ["Full time", "Part time", "Internship", "Project work", "Volunteering", "Contract"],
  },
  {
    id: 2,
    label: "Employment type",
    options: [
      "Full day",
      "Flexible schedule",
      "Shift work",
      "Distant work",
      "Shift method",
      "Hybrid",
      "Remote",
    ],
  },
  {
    id: 3,
    label: "Experience level",
    options: ["Entry level", "Junior", "Mid-level", "Senior", "Lead", "Manager", "Executive"],
  },
  {
    id: 4,
    label: "Salary range",
    options: ["$0-$30k", "$30k-$50k", "$50k-$80k", "$80k-$100k", "$100k-$150k", "$150k+"],
  },
  {
    id: 5,
    label: "Industry",
    options: [
      "Technology",
      "Healthcare",
      "Finance",
      "Education",
      "Manufacturing",
      "Retail",
      "Marketing",
      "Construction",
      "Hospitality",
    ],
  },
  {
    id: 6,
    label: "Required skills",
    options: [
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "Java",
      "SQL",
      "Project Management",
      "Digital Marketing",
      "Data Analysis",
    ],
  },
  {
    id: 7,
    label: "Education",
    options: [
      "High School",
      "Associate Degree",
      "Bachelor's Degree",
      "Master's Degree",
      "PhD",
      "Certification",
      "No degree required",
    ],
  },
  {
    id: 8,
    label: "Company size",
    options: [
      "Startup (1-10)",
      "Small (11-50)",
      "Medium (51-200)",
      "Large (201-500)",
      "Enterprise (500+)",
    ],
  },
  {
    id: 9,
    label: "Location type",
    options: ["On-site", "Remote", "Hybrid", "Travel required", "Multiple locations"],
  },
  {
    id: 10,
    label: "Benefits",
    options: [
      "Health insurance",
      "401(k)",
      "Stock options",
      "Professional development",
      "Gym membership",
      "Flexible hours",
      "Paid time off",
    ],
  },
];

// You might also want to add job categories data
export const jobCategories = [
  {
    id: 1,
    name: "Software Development",
    subcategories: ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps", "QA"],
  },
  {
    id: 2,
    name: "Design",
    subcategories: ["UI/UX", "Graphic Design", "Product Design", "Web Design"],
  },
  {
    id: 3,
    name: "Marketing",
    subcategories: ["Digital Marketing", "Content Marketing", "SEO", "Social Media"],
  },
  {
    id: 4,
    name: "Sales",
    subcategories: [
      "Account Executive",
      "Sales Development",
      "Customer Success",
      "Business Development",
    ],
  },
  {
    id: 5,
    name: "Finance",
    subcategories: ["Accounting", "Financial Analysis", "Investment Banking", "Risk Management"],
  },
];

// Add sample job posting data structure
export const jobPostingExample = {
  id: "job-123",
  title: "Senior Frontend Developer",
  company: "Tech Corp",
  location: "San Francisco, CA",
  salary: "$120k - $150k",
  employmentType: "Full time",
  workingSchedule: "Flexible schedule",
  experienceLevel: "Senior",
  requiredSkills: ["React", "TypeScript", "CSS", "Node.js"],
  description: "We are looking for a Senior Frontend Developer to join our team...",
  benefits: ["Health insurance", "401(k)", "Stock options"],
  postedDate: "2024-03-15",
  applicationDeadline: "2024-04-15",
};
