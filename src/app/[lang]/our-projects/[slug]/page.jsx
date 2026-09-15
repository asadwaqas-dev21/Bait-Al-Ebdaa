import ProjectDetail from "../../../../ProjectDetail";

export function generateStaticParams() {
  return [
    { slug: "government-authority" }
  ];
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  return <ProjectDetail slug={resolvedParams.slug} />;
}
