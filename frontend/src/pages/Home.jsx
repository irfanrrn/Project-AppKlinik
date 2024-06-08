import React from 'react'
import UserLayout from '../components/UserLayout'
import HeroesComponent from '../components/HeroesComponent'
import InformationComponent from '../components/InformationComponent'
import ServiceComponent from '../components/ServiceComponent'


export default function Home() {
  return (
    <UserLayout>
      <HeroesComponent />
      <InformationComponent />
      <ServiceComponent />
    </UserLayout>
  )
}
