import { certificates } from "@/constants/certifications";

export interface typeCertificate {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}


export type CategoryKey = keyof typeof certificates;

export const categories: { key: CategoryKey; label: string }[] = [
  { key: 'dioJava', label: 'DIO - Java' },
  { key: 'zylyty', label: 'Zylyty' },
  { key: 'dioPython', label: 'DIO - Python' },
  { key: 'google', label: 'Google' },
  { key: 'dioKubernetes', label: 'DIO - Kubernetes' },
];