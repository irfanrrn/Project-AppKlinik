import React from 'react'
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'

export default function UserLayout({children}) {
  return (
    <>
        <NavbarComponent />
        {children}
        <FooterComponent />
    </>
  )
}
