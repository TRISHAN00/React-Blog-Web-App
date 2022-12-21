import React from 'react'
import TopBar from '../../topbar/TopBar'

function Layout({children}) {
  return (
    <div>
        <TopBar/>
        <main>{children}</main>
    </div>
  )
}

export default Layout