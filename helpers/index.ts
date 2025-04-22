import { FooterDataType } from "@/types";

export const headerData: HeaderDataTypeProps[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "AI Powered Mock Interview",
    link: "/ai-powered-mock-interview",
  },
  {
    id: 3,
    label: "Search Job",
    link: "/search-job",
  },
  // {
  //   id: 4,
  //   label: "CompanyList",
  //   link: "/company-list",
  // },
  {
    id: 4,
    label: "Articles",
    link: "/articles",
  },
  {
    id: 5,
    label: "Resume Analysis",
    link: "/resume-analysis",
  },
];

export const footerData: FooterDataType[] = [
  {
    id: 1,
    label: "INFO",
    subLabel: [
      { label: "Company", link: "/company" },
      { label: "Products", link: "/products" },
      { label: "Engineering", link: "/engineering" },
      { label: "Services", link: "/services" },
      { label: "Productions", link: "/productions" },
    ],
  },
  {
    id: 2,
    label: "ABOUT US",
    subLabel: [
      { label: "Gallery", link: "/gallery" },
      { label: "Technologies", link: "/technologies" },
      { label: "Contacts", link: "/contacts" },
      { label: "Services", link: "/services" },
      { label: "Productions", link: "/productions" },
    ],
  },
  {
    id: 3,
    label: "CONTACT US",
    subLabel: [
      { label: "+91 7087963595", link: "phone" },
      {
        label: "coderdecodersolutions.com",
        link: "/coderdecodersolutions.com",
      },
      { label: "Chandigarh", link: "/engineering" },
    ],
  },
];
