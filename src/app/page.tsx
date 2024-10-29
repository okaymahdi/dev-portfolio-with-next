import { Experiences } from '@/components/Experiences/Experiences'
import { Hero } from '@/components/Hero/Hero'
import { RecentProjects } from '@/components/RecentProjects/RecentProjects'

export default function Home() {
  return (
    <main className="relative w-full mx-auto flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <Hero />
        <Experiences />
        <RecentProjects />
      </div>
    </main>
  )
}
