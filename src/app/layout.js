import { Urbanist, Oswald } from 'next/font/google'
import './globals.css'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const inter = Urbanist({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'My Store | Xander Billa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
