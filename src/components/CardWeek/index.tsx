import { Reviews } from '../Reviews'
import { TitleComponent } from '../TextComponents'
import * as C from './styles'

import foto from '../../assets/bg.png'

export function CardWeek() {
  return (
    <C.Container>
      <C.HeadCard>
        <div>
          <img src={foto} alt='' />
        </div>
        <div>
          <TitleComponent>Fish Burger</TitleComponent>
          <div>
            <p className='price'>
              <span>$</span>
              5.59
            </p>
          </div>
          <Reviews />
        </div>
      </C.HeadCard>
      <C.DescriptionCard>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... </p>
      </C.DescriptionCard>
    </C.Container>
  )
}
