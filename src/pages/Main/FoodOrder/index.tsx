import { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { Head } from '../../../components/Head'
import { SharedH2, SharedH4, SnackTitle } from '../../../components/SnackTitle'
import { UserMenuBar } from '../../../components/UserMenuBar'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import * as C from './styles'
import { theme } from '../../../styles/Theme'
import { IoSearch } from 'react-icons/io5'

import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import { Badge, Button, ButtonGroup, Divider } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AttachmentIcon from '@mui/icons-material/Attachment'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Avatar from '@mui/material/Avatar'

import Bg from '../../../assets/bg.png'
import { UserMobile } from '../../../components/UserMenuBar/UserMobile'
import { OrdersList } from '../../../components/Orders'
import { TextComponent } from '../../../components/TextComponents'
import { ProfileOrder } from '../../../components/ProfileOrder'
import { OrderItemList } from '../../../components/OrderList'

export default function Message() {
  return (
    <>
      <Head title='Orders' />
      <C.Head>
        <SnackTitle>Orders</SnackTitle>
        <div className='userMenu'>
          <UserMenuBar />
        </div>
        <div className='userMobile'>
          <UserMobile />
        </div>
      </C.Head>

      <C.Container>
        <C.Conversations>
          <SharedH2>Order in</SharedH2>
          <ButtonGroup variant='contained' aria-label='outlined primary button group'>
            <Button color='secondary'>Order in</Button>
            <Button>Prepared</Button>
            <Button>Delivered</Button>
          </ButtonGroup>
          <C.ContainerOrder>
            <OrdersList />
            <OrdersList />
            <OrdersList />
            <OrdersList />
            <OrdersList />
            <OrdersList />
          </C.ContainerOrder>
        </C.Conversations>

        <C.ContainerMessage>
          <SharedH2>Order Details</SharedH2>
          <C.DetailsOrder>
            <C.Details>
              <div>
                <h4>Order #1</h4>
                <TextComponent>June 1, 2020, 08:22 AM</TextComponent>
              </div>
              <ProfileOrder />
            </C.Details>

            <Divider />

            <C.MainDetails>
              <div className='address'>
                <TextComponent>Delivery Address</TextComponent>
                <SharedH4>
                  <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
                  Elm Street, 23
                </SharedH4>
                <TextComponent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt.{' '}
                </TextComponent>
              </div>
              <div>
                <div>
                  <TextComponent>Estimation Time</TextComponent>
                  <strong>10 Min</strong>
                </div>
                <div>
                  <TextComponent>Distance</TextComponent>
                  <strong>2.5 Km</strong>
                </div>
              </div>
              <div>
                <div>
                  <TextComponent>Payment</TextComponent>
                  <strong>E-Walletn</strong>
                </div>
                <div>
                  <TextComponent>Payment Status</TextComponent>
                  <strong>Completed</strong>
                </div>
              </div>
            </C.MainDetails>

            <Divider />

            <div>
              <OrderItemList small />
              <OrderItemList small />
            </div>

            <Divider />

            <C.Details>
              <p className='total'>Total</p>
              <p className='price'>
                +<span>$</span>
                5.59
              </p>
            </C.Details>
          </C.DetailsOrder>
          <C.FoodDetails>
            <Button variant='outlined' color='error'>
              Reject Order
            </Button>
            <Button variant='contained' color='secondary' sx={{ color: '#FFF' }}>
              Accept Order
            </Button>
          </C.FoodDetails>
        </C.ContainerMessage>
      </C.Container>
    </>
  )
}
