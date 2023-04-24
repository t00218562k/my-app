import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    //https://tailwindcss.com/docs/customizing-colors
    <div className='text-rose-500 text-5xl'>Hello</div>
  )
}
