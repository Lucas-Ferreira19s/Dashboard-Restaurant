import { TitleComponent } from '../TextComponents'
import * as C from './styles'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import foto from '../../assets/placeholder.svg'
import { Avatar, Divider } from '@mui/material'

export function CardSeller() {
  return (
    <C.Container>
      <div>
        <img src={foto} alt='' />
      </div>
      <C.MainCard>
        <TitleComponent>Fish Burger</TitleComponent>
        <div>
          <p>
            <span>$</span>
            5.59
          </p>
        </div>
        <C.FoodCard>
          <p className='sold'>Sold 1k</p>
          <p className='percentage'>+ 15%</p>
          <Divider orientation='vertical' flexItem />
          <span>
            <Avatar sx={{ width: 20, height: 20, bgcolor: '#A6C44A' }}>
              <ArrowUpwardIcon sx={{ fontSize: 15 }} />
            </Avatar>
          </span>
        </C.FoodCard>
      </C.MainCard>
    </C.Container>
  )
}
