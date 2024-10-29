'use client'

import { TypewriterEffect } from './TypewriterEffect'

export function TypewriterText() {
  const words = [
    {
      text: 'Build',
    },
    {
      text: 'awesome',
    },
    {
      text: 'apps',
    },
    {
      text: 'with',
    },
    {
      text: 'Aceternity.',
      className: 'text-violet-500',
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffect words={words} />
    </div>
  )
}
