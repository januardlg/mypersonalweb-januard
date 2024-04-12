import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { GreetingSection } from '@/container'

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <GreetingSection />
    </main>
  )
}
