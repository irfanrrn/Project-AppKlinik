import React from 'react'
import SidebarComponent from './SidebarComponent';
function DashboardLayout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarComponent />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout;