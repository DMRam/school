import React from 'react'
import { AuthenticationScreen } from './components/content/auth/AuthenticationScreen'
import { DashboardComp } from './components/content/dashboard/DashboardComp'
import { FooterComp } from './components/footer/FooterComp'
import { HeaderComp } from './components/header/HeaderComp'

export const App = () => {
  return (
    <>
      <HeaderComp />
      <div>
        <AuthenticationScreen />
      </div>
      <div>
        <DashboardComp/>
      </div>
      <FooterComp />
    </>
  )
}
