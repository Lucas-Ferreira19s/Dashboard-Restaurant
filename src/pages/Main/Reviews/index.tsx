import { Head } from '../../../components/Head'
import { SharedH2, SnackTitle } from '../../../components/SnackTitle'
import { TextComponent, TitleComponent } from '../../../components/TextComponents'
import { UserMenuBar } from '../../../components/UserMenuBar'
import { UserMobile } from '../../../components/UserMenuBar/UserMobile'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { IoSearch } from 'react-icons/io5'

import { theme } from '../../../styles/Theme'

import * as C from './styled'
import { Avatar } from '@mui/material'
import { BarChart } from './chart'
import { CardReviews } from '../../../components/CardReviews'

export default function Reviews() {
  return (
    <>
      <Head title='Reviews' />
      <C.Head>
        <SnackTitle>Customer Reviews</SnackTitle>
        <div className='userMenu'>
          <UserMenuBar />
        </div>
        <div className='userMobile'>
          <UserMobile />
        </div>
      </C.Head>

      <C.Container>
        <C.ContainerReviewCharts>
          <C.CardReviewCharts>
            <div>
              <div className='head-right'>
                <TitleComponent text>Positive Review</TitleComponent>
                <TextComponent>June 1, 2020, 08:22 AM</TextComponent>
              </div>

              <div>
                <p>This Month</p>

                <C.Review>
                  <div>
                    <p className='number'>3.678</p>
                  </div>
                  <div>
                    <p>Reviews</p>
                  </div>
                </C.Review>

                <div className='index'>
                  <span>
                    <Avatar sx={{ width: 20, height: 20, bgcolor: '#A6C44A' }}>
                      <ArrowUpwardIcon sx={{ fontSize: 15 }} />
                    </Avatar>
                  </span>

                  <p>+ 15%</p>
                </div>
              </div>
            </div>
            <div>
              <BarChart />
            </div>
          </C.CardReviewCharts>
          <C.CardReviewCharts>
            <div>
              <div className='head-right'>
                <TitleComponent text>Negative Review</TitleComponent>
                <TextComponent>June 1, 2020, 08:22 AM</TextComponent>
              </div>
              <div>
                <p>This Month</p>

                <C.Review>
                  <div>
                    <p className='number'>1.678</p>
                  </div>
                  <div>
                    <p>Reviews</p>
                  </div>
                </C.Review>

                <div className='index'>
                  <span>
                    <Avatar sx={{ width: 20, height: 20, bgcolor: '#EB5757' }}>
                      <ArrowDownwardIcon sx={{ fontSize: 15 }} />
                    </Avatar>
                  </span>

                  <p className='percentage'>+ 15%</p>
                </div>
              </div>
            </div>
            <div>
              <BarChart />
            </div>
          </C.CardReviewCharts>
        </C.ContainerReviewCharts>
        <C.CardsReviews>
          <SharedH2>Recent Reviews</SharedH2>
          <div className='input'>
            <IoSearch size={20} color={theme.colors.yellow} />
            <input type='text' placeholder='Search' />
          </div>
          <div className='grid-card'>
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
            <CardReviews />
          </div>
        </C.CardsReviews>
      </C.Container>
    </>
  )
}
