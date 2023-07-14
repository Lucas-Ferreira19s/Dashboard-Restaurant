import { SnackTitle } from '../../../components/SnackTitle'
import { Head } from '../../../components/Head'
import * as C from './styles'
import { TextComponent } from '../../../components/TextComponents'
import { Avatar, Divider } from '@mui/material'

import { BarChart } from './charts'
import { ActivityBar, DoughnutChart, LineBar, LineChartTree, LineChartTwo } from './charts copy'

import { IoSearch } from 'react-icons/io5'
import { theme } from '../../../styles/Theme'
import { UserMenuBar } from '../../../components/UserMenuBar'

import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { SemCircular } from './circular-progressbar'
import { CustomizedProgressBars } from '../../../components/ProgressBar'

export default function Dashboard() {
  return (
    <C.Container>
      <Head title='Dashboard' />

      <C.HeadDashboard>
        <SnackTitle>Dashboard</SnackTitle>
        <div className='top-left'>
          <div className='input'>
            <IoSearch size={20} color={theme.colors.yellow} />
            <input type='text' placeholder='Search' />
          </div>
          <UserMenuBar />
        </div>
      </C.HeadDashboard>
      <C.GridContainer>
        <C.GridItem x='1 / span 2' y='1' className='card-one'>
          <div className='card-flex'>
            <div className='card-primary'>
              <TextComponent>Total Income</TextComponent>
              <strong>$12.890,00</strong>
            </div>
            <Divider orientation='vertical' flexItem />
            <div>
              <TextComponent>Income</TextComponent>
              <strong>$4345,00</strong>
              <div className='index'>
                <span>
                  <Avatar sx={{ width: 18, height: 18, bgcolor: '#A6C44A' }}>
                    <ArrowUpwardIcon sx={{ fontSize: 13 }} />
                  </Avatar>
                </span>

                <p>+ 15%</p>
              </div>
            </div>
            <div>
              <TextComponent>Expense</TextComponent>
              <strong>$2890,00</strong>
              <div className='index'>
                <span>
                  <Avatar sx={{ width: 18, height: 18, bgcolor: '#EB5757' }}>
                    <ArrowDownwardIcon sx={{ fontSize: 13 }} />
                  </Avatar>
                </span>

                <p className='percentage'>+ 10%</p>
              </div>
            </div>
            <div className='send'>
              <p>Withdraw</p>
              <SendOutlinedIcon sx={{ color: 'inherit' }} />
            </div>
          </div>
        </C.GridItem>

        <C.GridItem x='3' y='1 / span 2' className='card-one'>
          <C.Overview>
            <div className='icon-overview'>
              <DoneAllIcon sx={{ color: '#F8B602', fontSize: '15px' }} />
            </div>
            <div>
              <TextComponent>Total Order Complete</TextComponent>
              <strong>2.678</strong>
            </div>
          </C.Overview>
          <C.Overview>
            <div className='icon-overview'>
              <CheckCircleOutlineIcon sx={{ color: '#F8B602', fontSize: '15px' }} />
            </div>
            <div>
              <TextComponent>Total Order Delivered</TextComponent>
              <strong>1.234</strong>
            </div>
          </C.Overview>
          <C.Overview>
            <div className='icon-overview'>
              <ErrorOutlineOutlinedIcon sx={{ color: '#F8B602', fontSize: '15px' }} />
            </div>
            <div>
              <TextComponent>Total Order Canceled</TextComponent>
              <strong>123</strong>
            </div>
          </C.Overview>
          <C.Overview>
            <div className='icon-overview'>
              <HelpOutlineOutlinedIcon sx={{ color: '#F8B602', fontSize: '15px' }} />
            </div>
            <div>
              <TextComponent>Order Pending</TextComponent>
              <strong>432</strong>
            </div>
          </C.Overview>
        </C.GridItem>

        <C.GridItem x='1' y='2' className='bar-chart'>
          <BarChart />
          <div className='flex'>
            <p>00:00</p>
            <p>23:59</p>
          </div>
        </C.GridItem>

        <C.GridItem x='2' y='2' className='bar-chart'>
          <div className='flex'>
            <SemCircular />
            <TextComponent>
              Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            </TextComponent>
          </div>
        </C.GridItem>

        <C.GridItem x='1 / span 2' y='3 / span 2' className='charts-line'>
          <strong>Order Rate</strong>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            <div style={{ display: 'flex', gap: 20 }}>
              <div style={{ alignSelf: 'center' }}>
                <PermIdentityIcon sx={{ fontSize: 30 }} />
              </div>
              <div>
                <TextComponent>Order Total</TextComponent>
                <strong>23.307</strong>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 20 }}>
                  <TextComponent>Target</TextComponent>
                  <strong>3.982</strong>
                </div>
                <div style={{ width: '100%', marginTop: 8 }}>
                  <CustomizedProgressBars />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 15 }}>
              <div>
                <TextComponent>This Month</TextComponent>
                <strong>1324</strong>
              </div>
              <div>
                <TextComponent>Last Month</TextComponent>
                <strong>1324</strong>
              </div>
            </div>
          </div>
          <LineBar />
        </C.GridItem>

        <C.GridItem x='3' y='3 / span 2' style={{ padding: '15px' }}>
          <strong>Popular Food</strong>
          <DoughnutChart />
          <TextComponent>Legend</TextComponent>
          <div style={{ marginTop: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500' }}>Asian Food (27%)</p>
              </div>
              <strong>763</strong>
            </div>

            <div style={{ display: 'flex', marginTop: '5px', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500' }}>Fast Food (50%)</p>
              </div>
              <strong>321</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500' }}>Western Food (23%)</p>
              </div>
              <strong>69</strong>
            </div>
          </div>
        </C.GridItem>

        <C.GridItem x='1 / span 3' y='5 / span 2' style={{ padding: '15px' }}>
          <strong>Activity</strong>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ActivityBar />
            <div style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
              <div>
                <TextComponent>Completed Order</TextComponent>
                <strong>932 Task</strong>
                <LineChartTwo />
              </div>
              <div>
                <TextComponent>Order Delivered</TextComponent>
                <strong>932</strong>
                <LineChartTree />
              </div>
            </div>
          </div>
        </C.GridItem>
      </C.GridContainer>
    </C.Container>
  )
}
