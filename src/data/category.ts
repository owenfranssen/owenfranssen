export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Technology",
    slug: "technology",
    color: "blue",
    description:
      "Keep up with the latest tech trends and learn about the latest innovations in software development, hardware design, cybersecurity, and more.",
  },
  {
    title: "Career",
    slug: "career",
    color: "orange",
    description:
      "Discover tips, skills and strategies for career development and goals, and find resources to help you advance as a developer.",
  },
  {
    title: "Personal",
    slug: "personal",
    color: "green",
    description:
      "Discover tips and strategies for self-improvement, personal development, and achieving your goals, and find resources to help you grow as a person.",
  },
  {
    title: "Code",
    slug: "code",
    color: "pink",
    description:
      "Shortcuts, helpful snippets and alternate ways of solving codeing problems.",
  },
  {
    title: "Design",
    slug: "design",
    color: "purple",
    description:
      "Get insights and inspiration from the world of design, with articles covering graphic design, product design, interior design, and more.",
  },
];
