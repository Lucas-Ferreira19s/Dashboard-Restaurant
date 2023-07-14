import { Reviews } from '../Reviews'
import { TitleComponent } from '../TextComponents'
import * as C from './styled'

import foto from '../../assets/bg.png'

export function CardPromo() {
  return (
    <C.Container>
      <C.Left>
        <div className='off'>
          <span>15% Off</span>
        </div>

        <TitleComponent>Fish Burger</TitleComponent>
        <div className='price'>
          <p>
            <span>$</span>
            3.59
          </p>
          <p className='desc'>$5.59</p>
        </div>
        <Reviews />
      </C.Left>
      <div className='right'>
        <img src={foto} alt='' />
      </div>
    </C.Container>
  )
}
