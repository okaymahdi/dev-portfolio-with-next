/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { projects } from '../../../data'
import { PinContainer } from '../ui/PinContainer'

export const RecentProjects = () => {
  return (
    <section id="projects" className="container pb-20 sm:px-10 px-5">
      <h1 className="heading text-white">
        <span className="text-purple-400">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={project.title} href="https://twitter.com/">
              <div className="flex flex-col  basis-full sm:basis-1/2 w-[20rem] h-[20rem] p-4 tracking-tight">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-gray-100">
                  {project.title}
                </h3>
                <div>
                  <span className="text-gray-500">{project.desc}</span>
                </div>

                <div className="flex flex-1 w-full rounded-lg mt-4">
                  <img
                    src={project.img}
                    alt="cover"
                    className="z-10 rounded-lg bg-cover"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}
