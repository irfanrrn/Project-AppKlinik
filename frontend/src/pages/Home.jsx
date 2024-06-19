import React from 'react'
import UserLayout from '../components/UserLayout'
import HeroesComponent from '../components/HeroesComponent'
import InformationComponent from '../components/InformationComponent'
import ServiceComponent from '../components/ServiceComponent'
import WhychoiceComponent from '../components/WhychoiceComponent'
import AboutComponent from '../components/AboutComponent'
import SecdoctorsComponent from '../components/SecdoctorsComponent'
import ContactComponent from '../components/ContactComponent'



export default function Home() {
  return (
    <UserLayout>
      <HeroesComponent />
      <InformationComponent />
      <ServiceComponent />
      <AboutComponent />
      <WhychoiceComponent />
      <SecdoctorsComponent />
      <ContactComponent />
    </UserLayout>
  )
}
