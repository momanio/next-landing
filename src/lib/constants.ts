// src/lib/constants.ts
export const siteConfig = {
  name: "RTL Landing Page",
  description: "Arabic RTL Landing Page built with Next.js and Tailwind",
  mainNav: [
    {
      title: "الرئيسية",
      href: "/",
    },
    {
      title: "المميزات",
      href: "#features",
    },
    {
      title: "من نحن",
      href: "#about",
    },
    {
      title: "اتصل بنا",
      href: "#contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    docs: "https://your-documentation.com",
  },
};

export type SiteConfig = typeof siteConfig;
