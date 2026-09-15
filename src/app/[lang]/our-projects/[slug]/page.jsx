import ProjectDetail from "../../../../../ProjectDetail";

export function generateStaticParams() {
  return [
    { slug: "government-authority" }
  ];
}

export default function ProjectDetailPage({ params }) {
  return <ProjectDetail slug={params.slug} />;
}
