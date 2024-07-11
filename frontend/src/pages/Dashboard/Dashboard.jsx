import React from 'react'
import DashboardHeader from 'components/DashboardHeader/DashboardHeader'
import DashboardSidebar from 'components/DashboardSidebar/DashboardSidebar'
import DashboardMain from 'components/DashboardMain/DashboardMain'
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute'


function Dashboard() {
  return (
    <div>
        <DashboardHeader/>
        <DashboardSidebar/>
        <DashboardMain/>
    </div>
  )
}

export default Dashboard