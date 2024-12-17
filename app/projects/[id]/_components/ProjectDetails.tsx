"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectType } from '@/data/projects'

interface ProjectDetailsProps {
  project: ProjectType
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsOpen(true)
  }

  // const closeModal = () => setIsOpen(false)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-6">{project.description}</p>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className='text-primary'>{tech}</Badge>
          ))}
        </div>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.images.map((img, index) => (
          <div key={index} className="relative aspect-square cursor-pointer" onClick={() => openModal(index)}>
            <Image
              src={img}
              alt={`Project image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{project.title} - Image {currentImageIndex + 1}</DialogTitle>
            <DialogDescription>
              Use arrow keys or buttons to navigate
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video">
            <Image
              src={project.images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={prevImage}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button variant="outline" onClick={nextImage}>
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

