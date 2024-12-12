import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import placeholderimage from "../images/placeholder.svg"

const projects = [
  {
    id: 1,
    name: 'Startup Club Website',
    description: 'A website to showcase events and contact the club.'
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link href="/" key={project.id} className="block">
            <Card className="animate-slide-up glass-effect h-full transition-transform hover:scale-105" style={{animationDelay: `${index * 0.1}s`}}>
              <Image
                src={placeholderimage}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

