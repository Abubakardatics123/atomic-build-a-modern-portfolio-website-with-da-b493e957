import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ProjectDetail } from "@/components/ProjectDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title + " | Alex Chen",
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return <ProjectDetail project={project} relatedProjects={relatedProjects} />;
}
