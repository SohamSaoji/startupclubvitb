import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HeaderAnimation from './components/header-animation'
import aboutimage from "./images/about.png"
import joinimage from "./images/joinus.png"
import noprofileimage from "./images/noprofile.png"

const teamMembers = [
  { name: 'Dr. Pranshu Pranjal', role: 'Faculty Coordinator'},
  { name: 'Mr. Bhupendra Panchal', role: 'Faculty Coordinator'},
  { name: 'Mr. Aditya Yuvraj', role: 'Student Coordinator'}]

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <HeaderAnimation />
        <div className="relative z-10 p-8 inline-block animate-slide-up">
          <h1 className="text-5xl sm:text-5xl md:text-5xl font-bold mb-6">
            Igniting Ideas, Empowering Entrepreneurs,<br></br> Building Tomorrow&apos;s Startups
          </h1>
          <br></br>
          <p className="text-xl text-gray-500 sm:text-xl mb-8 max-w-3xl mx-auto">
            Welcome to the Startup Club of VIT Bhopal! We&apos;re thrilled to have you here, where innovation and collaboration come to life. Whether you&apos;re a budding entrepreneur, a creative thinker, or someone with a passion for making an impact, this is your space to explore, learn, and grow. Together, we&apos;ll turn ideas into ventures, challenges into opportunities, and dreams into reality. Let’s build the future, one step at a time—welcome to the journey!          </p>
          <br></br>
          <div className="space-x-4">
            <Button asChild className="transition-transform hover:scale-105">
              <Link href="#about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" className="transition-transform hover:scale-105">
              <Link href="/contact">Join Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={aboutimage}
              alt="About VIT Bhopal Startup Club"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="glass-effect p-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-2sm mb-5 text-gray-500">
                The Startup Club at VIT Bhopal is a dynamic community of innovators and aspiring entrepreneurs dedicated to turning ideas into impactful ventures. We provide a platform for students to collaborate, learn, and grow through workshops, mentorship programs, and events designed to spark creativity and problem-solving. Whether you&apos;re a tech enthusiast, designer, marketer, or strategist, the Startup Club is the perfect place to connect, innovate, and build the future together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={joinimage}
              alt="Why Join VIT Bhopal Startup Club"
              width={500}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <div className="glass-effect p-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Join Us?</h2>
              <p className="text-2sm mb-5 text-gray-500">Joining the Startup Club at VIT Bhopal opens doors to endless opportunities for innovation, collaboration, and growth. As a member, you&apos;ll gain access to hands-on workshops, mentorship from industry experts, and a vibrant network of like-minded peers. Whether you&apos;re looking to build a startup, develop entrepreneurial skills, or simply explore your potential, our club provides the tools, guidance, and platform to turn your ideas into reality. Be part of a community that inspires creativity, nurtures talent, and drives change—your journey to success starts here!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center animate-slide-up glass-effect p-6" style={{animationDelay: `${index * 0.1}s`}}>
                <Image
                  src={noprofileimage}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 mb-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

