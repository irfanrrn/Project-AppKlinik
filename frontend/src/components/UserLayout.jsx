import React from 'react'
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'

export default function UserLayout({children}) {
  return (
    <div>
        <NavbarComponent />
        {children}
        <FooterComponent />
    </div>
  )
}
