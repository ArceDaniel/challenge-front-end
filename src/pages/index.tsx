import { Inter } from 'next/font/google'
import RightBar from '@/components/RightBar'
import Hero from '@/components/Hero'
import KnowMore from '@/components/KnowMore'
import ClientSay from '@/components/ClientSay'
import Clients from '@/components/Clients'
import Speciality from '@/components/Speciality'
import ContactUs from '@/components/ContactUs'


export default function Home() {
  return (
    <>
    <Hero />
    <KnowMore />
    <Speciality />
    <Clients />
    <ClientSay />
    <ContactUs />
    <RightBar />
    </>
  )
}
