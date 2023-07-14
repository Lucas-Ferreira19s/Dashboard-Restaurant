import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'

import Dashboard from './pages/Main/Dashboard'
import Menu from './pages/Main/Menu'
import FoodOrder from './pages/Main/FoodOrder'
import Reviews from './pages/Main/Reviews'
import Setting from './pages/Main/SettingPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='menu' element={<Menu />} />
        <Route path='order' element={<FoodOrder />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='setting' element={<Setting />} />
      </Route>
    </Routes>
  )
}
