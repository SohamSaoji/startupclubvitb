import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import placeholderimage from "../images/placeholder.svg"

const upcomingEvents = [
  { id: 1, title: 'Startup Pitch Competition (Example Event)', date: 'Dec, 25, 2024', time: '12:00', description: 'Present your startup idea to a panel of judges and win funding.' },
]

const pastEvents = [
  { id: 3, title: 'NIRMAAN 1.O', date: 'Sept. 28, 2024' },
  { id: 4, title: 'StartX : Inaugural Event of StartUp Club', date: 'April 18, 2024' },
]

export default function Events() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Events</h1>

      <section className="mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <Card key={event.id} className="animate-slide-up glass-effect" style={{animationDelay: `${index * 0.1}s`}}>
              <Image
                src={placeholderimage}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">Date: {event.date} | Time: {event.time}</p>
                <p className="mb-4">{event.description}</p>
                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Past Events</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pastEvents.map((event, index) => (
            <Card key={event.id} className="animate-slide-up glass-effect" style={{animationDelay: `${index * 0.1}s`}}>
              <Image
                src={placeholderimage}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">Date: {event.date}</p>
                <Link href={`/events/${event.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

