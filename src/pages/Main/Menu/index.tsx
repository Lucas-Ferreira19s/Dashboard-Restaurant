// import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Input } from '../../../components/Input'
import { Category } from '../../../components/Category'
import { SharedH2 } from '../../../components/SnackTitle'

import * as C from './styles'

import { CardWeek } from '../../../components/CardWeek'

// import { DataItems } from '../../../data'
// import { Items } from '../../../types'
import { UserMenuBar } from '../../../components/UserMenuBar'
import { CardSeller } from '../../../components/CardSeller'
import { CardPromo } from '../../../components/CardPromo'

export default function Dashboard() {
  // const [popular, setPopular] = useState<Items[]>([])
  // const [product, setProduct] = useState<Items[]>([])

  // useEffect(() => {
  //   const wines = DataItems.find((it) => it.name === 'Popular')
  //   const beers = DataItems.find((it) => it.name === 'Product')

  //   wines && setPopular(wines.items)
  //   beers && setProduct(beers.items)
  // }, [])

  return (
    <>
      <Head title='Menu' />
      <C.ContainerHerder>
        <C.MainDashboard>
          <div className='head'>
            <Input placeholderProps='Search' titleProps='Menu' flex />
            <div className='menu'>
              <UserMenuBar />
            </div>
          </div>
          <div className='mb'>
            <SharedH2>Category</SharedH2>
          </div>
          <div className='mb'>
            <Category />
          </div>
          <div className='mb'>
            <SharedH2>Popular This Week</SharedH2>
          </div>
          <C.ContainerCard>
            <CardWeek />
            <CardWeek />
            <CardWeek />
            <CardWeek />
          </C.ContainerCard>
          <div className='mb'>
            <SharedH2>Best Seller</SharedH2>
          </div>
          <C.ContainerCard>
            <CardSeller />
            <CardSeller />
            <CardSeller />
            <CardSeller />
            <CardSeller />
          </C.ContainerCard>
          <div className='mb'>
            <SharedH2>Promo</SharedH2>
          </div>
          <C.ContainerCard>
            <CardPromo />
            <CardPromo />
            <CardPromo />
            <CardPromo />
          </C.ContainerCard>
        </C.MainDashboard>
      </C.ContainerHerder>
    </>
  )
}
