import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import placeholderimage from "../../images/placeholder.svg"

const pastEvents = [
  { 
    id: 3, 
    title: 'NIRMAAN 1.O ', 
    date: 'Sept. 28, 2024', 
    description: "Dear Students, Greetings from Startup Club! 🚀 “Vikas ki rah mei, vicharo ki neev sei safalta ka nirmaan hota hai” On the path of development, success is built on the foundation of ideas. We are thrilled to introduce NIRMAAN 1.O, a 6-month entrepreneurship program meticulously crafted by our club. NIRMAAN 1.O offers a comprehensive journey that equips aspiring entrepreneurs with the insights, mentorship, and practical experience needed to transform their visions into reality. The season-1 is a half-year expedition of innovation and growth, that comprises 3 episodes and 2 rounds: Round 1: Pitch Deck Prastuti (Online) Episode 1: Finance Gyaan (Offline) Episode 2: Mentor Milap (Offline) Round 2: Aavishkar Prarup (Online) Episode 3: The Finale: Niveshak Round (Offline) The journey of NIRMAAN 1.O begins with the first round, 'Pitch Deck Prastuti'. In this initial phase, teams are invited to participate by submitting their pitch decks through a Google Form. Following submission, teams will engage in an intense online Ideathon. Each team will have 15 minutes to present their ideas to a panel of two experienced judges. This phase will set the stage for NIRMAAN 1.O, ensuring that only the most promising and well-prepared teams advance, ready to turn their ideas into impactful ventures.\n 📅 Date :  28th September ‘24 Time: 10:00 AM to 4:20 PM Venue: Online Mode Team: 2-4 participants Registration fee: Rs 120/- team.",
  },
  { 
    id: 4, 
    title: 'StartX : Inaugural Event of StartUp Club', 
    date: 'April 18, 2024', 
    description: "We are thrilled to announce the launch of our new Startup Club at VIT Bhopal University! As part of our inauguration, we are excited to invite you to our inaugural event, StartX.\n The StartUp Club aims to create a startup culture in the college premise providing a platform for aspiring entrepreneurs like yourself to foster creativity, innovation, and collaboration. Whether you're a seasoned entrepreneur or just curious about startups, this club is for you! We believe that by coming together, we can cultivate an environment where ideas flourish and dreams become reality.",
  },
]

export default function PastEventDetails({ params }: { params: { id: string } }) {
  const event = pastEvents.find(e => e.id === parseInt(params.id))

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <Card className="glass-effect">
        <Image
          src={placeholderimage}
          alt={event.title}
          width={800}
          height={600}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <CardHeader>
          <CardTitle className="text-3xl">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-4">Date: {event.date}</p>
          <p className="mb-6 text-gray-300">{event.description}</p>
          <h3 className="text-2xl font-bold mb-4">Event Photos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
           
              <Image
                src={placeholderimage}
                alt="event photo"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
          </div>
          <Link href="/events">
            <Button>Back to Events</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

