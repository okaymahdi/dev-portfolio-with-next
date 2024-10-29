import { SparklesPreview } from '../ui/SparkPreview'
import { Spotlight } from '../ui/Spotlight'

export const Hero = () => {
  return (
    <section id="home" className="border-b-2 border-border">
      {/* spotlight */}
      <div className="flex justify-center relative z-50">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="violet"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      {/* spark preview */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center ">
          <SparklesPreview />
        </div>
      </div>
    </section>
  )
}
