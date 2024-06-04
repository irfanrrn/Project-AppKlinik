import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'


export default function Home() {
  return (
    <div>
      <NavbarComponent/>

      <button className="btn btn-warning">Button contoh</button>

      <FooterComponent/>
    </div>
  )
}
