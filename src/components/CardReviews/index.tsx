import * as C from './styles'

import foto from '../../assets/profile.png'
import { Divider, Rating, Stack } from '@mui/material'

export function CardReviews() {
  return (
    <C.Container>
      <div className='info'>
        <div>
          <img src={foto} />
        </div>
        <div>
          <strong>Ruby Roben</strong>
          <p>User since 2020</p>
        </div>
      </div>
      <Divider />
      <div className='info'>
        <div>
          <img src={foto} />
        </div>
        <div>
          <strong>Fish Burger</strong>
          <Stack spacing={1}>
            <Rating name='half-rating' defaultValue={5} precision={0.5} />
          </Stack>
        </div>
      </div>
      <div className='description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div>
        <p className='label'>Ordered June 21, 2020</p>
      </div>
    </C.Container>
  )
}
