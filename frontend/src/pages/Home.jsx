import React from 'react'
import UserLayout from '../components/UserLayout'
import HeroesComponent from '../components/HeroesComponent'


export default function Home() {
  return (
    <UserLayout>
      <HeroesComponent />
    </UserLayout>
  )
}
