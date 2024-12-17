import { notFound } from 'next/navigation'
import ProjectDetails from './_components/ProjectDetails'
import { projects, ProjectType } from '@/data/projects'


// This would typically come from an API or database
const getProject = async (id: string): Promise<ProjectType | null> => {
  return projects.find(p => p.id === parseInt(id)) || null
}

type TParams = Promise<{
  id: string
}>

export default async function ProjectPage({ params }: { params: TParams}) {
  const id = (await params)?.id
  const project = await getProject(id)

  if (!project) {
    notFound()
  }

  return <ProjectDetails project={project} />
}

