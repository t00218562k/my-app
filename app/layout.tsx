import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IBI first app',
  description: 'Hello world my first app thank you',
}

const font = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
