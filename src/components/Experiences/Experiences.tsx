import Image from 'next/image'
import { workExperiences } from '../../../data'
import { Button } from '../ui/MovingBorderButton'

export const Experiences = () => {
  return (
    <section id="experiences" className="py-20 sm:px-10 px-5">
      <h1 className="text-white heading">
        <span className="text-purple-400">Experiences</span>
      </h1>

      {/* moving border */}
      <div className="w-full pt-12 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-10">
        {workExperiences.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            style={{
              background: '#030712',
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white"
          >
            <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={experience.thambnail}
                alt={experience.title}
                width={0}
                height={0}
                className="w-16 text-center"
              />
              <div className="lg:pt-5">
                <h1 className="text-xl lg:text-2xl font-bold">
                  {experience.title}
                </h1>
                <p className="text-gray-100">{experience.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  )
}
