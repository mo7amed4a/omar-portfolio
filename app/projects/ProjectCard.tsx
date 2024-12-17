import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ProjectType } from '@/data/projects'
import Image from 'next/image'
import React from 'react'


export default function ProjectCard({
  project
}:{
  project: ProjectType
}) {
  return (
    <Card className='group hover:border-secondary'>
      <CardHeader className='p-0 overflow-hidden'>
        {
                <Image className='rounded-t-2xl' src={project.images[0]} width={1000} height={1000} alt='project' />

          // project.image.length > 1 && (
          //   <div className='flex gap-1'>
          //     {project.image.map((image, index) => (
          //       <Image className='rounded-t-2xl' key={index} src={image} width={1000} height={1000} alt='project' />
          //     ))}
          //   </div>
          // )
        }
      </CardHeader>
      <CardContent className='py-7 space-y-3 group-hover:text-secondary'>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.description}
        </CardDescription>
        <CardDescription>
          <span className='text-primary-foreground'>Technologies: </span>
          {project.technologies.map((technology: string, index: number) => (
            <span className='text-secondary' key={index}>{technology}, </span>
          ))}
        </CardDescription>

      </CardContent>
    </Card>
  )
}
