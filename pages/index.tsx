import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Img from '@/components/Img'
import About from '@/components/About'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-neutral-50'>
    <div>
      <Header/>
    </div>
    <div>
      <Img/>
    </div>
    <div className='bg-gray-800 text-white'>
     <About/>
     <AboutUs/>
     <ContactUs/>
     <Footer/>
    </div>
    </div>
  )
}
