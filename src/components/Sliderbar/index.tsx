//import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineRestaurant, MdDeliveryDining, MdReviews } from 'react-icons/md'
import { RiBillFill } from 'react-icons/ri'
import { AiFillSetting } from 'react-icons/ai'
import { Container } from './styles'

import logo from '../../assets/Logo.png'

export function Sidebar() {
  return (
    <Container>
      <div>
        <img src={logo} alt='menu' />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <span>
                <MdOutlineRestaurant size={20} />
              </span>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='menu'>
              <span>
                <MdReviews size={20} />
              </span>
              <p>Menu</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='order'>
              <span>
                <MdDeliveryDining size={20} />
              </span>
              <p>Food Order</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='reviews'>
              <span>
                <RiBillFill size={20} />
              </span>
              <p>Reviews</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='setting'>
              <span>
                <AiFillSetting size={20} />
              </span>
              <p>Setting</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
