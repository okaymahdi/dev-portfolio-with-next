'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { SparklesCore } from '../ui/sparkles'
import { MagicButton } from './MagicButton'
import { SparklesText } from './sperklesText'

export function SparklesPreview() {
  return (
    <div className="w-full h-[40rem] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#f1f1f1"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <SparklesText />
        {/* magic button */}
        <div>
          <Link href="#work">
            <MagicButton
              title="Show My Work"
              position="right"
              icon={<FaLocationCrosshairs />}
            />
          </Link>
        </div>
      </h1>
      {/* background grid */}
      <div className="w-full absolute bottom-0 top-20 md:-top-72  min-h-96 -z-50 flex items-center justify-center">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={100}
          height={100}
          className="w-full h-full opacity-40"
        />
      </div>
    </div>
  )
}
