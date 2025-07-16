import { projetos } from "@/constants/projetos";

export interface typeProject {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}

export type ProjectCategory = keyof typeof projetos;

export const categories: { key: ProjectCategory; label: string }[] = [
  { key: 'native', label: 'React Native' },
  { key: 'next', label: 'Next.js' },
  { key: 'javaScript', label: 'JavaScript' },
  { key: 'angular', label: 'Angular' },
  { key: 'node', label: 'Node.js' },
];