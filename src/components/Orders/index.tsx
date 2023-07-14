import { Button } from '@mui/material'
import { TextComponent } from '../TextComponents'
import * as C from './styled'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export function OrdersList() {
  return (
    <C.Container>
      <div>
        <h4>Order #1</h4>
        <TextComponent>June 1, 2020, 08:22 AM</TextComponent>
      </div>
      <div className='right'>
        <p>
          <span>$</span>
          202.00
        </p>
        <Button
          aria-label='expand row'
          size='small'
          variant='outlined'
          sx={{
            bgcolor: '#F5F5F5',
            border: 'none',
            minWidth: '20px',
            borderRadius: '13px',
            color: '#A098AE',
          }}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </C.Container>
  )
}
