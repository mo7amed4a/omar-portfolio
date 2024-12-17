import ProjectCard from '@/app/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Link from 'next/link';
import React from 'react'

export default function ProjectsSection() {
  return (
    <div className="container-app py-10 space-y-5">
      <div className='flex justify-between'>
        <h1 className="text-lg md:text-2xl font-bold">
          Our <span className="text-secondary">Projects</span>
        </h1>
       <Button asChild>
       <Link className='' href={"/projects"}>
          View All
        </Link>
       </Button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.slice(0,4).map((project) => (
          <Link
            href={`/projects/${project.id}`}
            className="w-full"
            key={project.id}
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  )
}
