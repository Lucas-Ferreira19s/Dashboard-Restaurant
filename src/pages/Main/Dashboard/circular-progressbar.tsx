import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const SemCircular = () => {
  return (
    <div style={{ width: '200px', height: '100px', marginRight: '20px' }}>
      <strong>Performance</strong>
      <CircularProgressbar
        value={75}
        text={`+ 15%`}
        circleRatio={0.5}
        strokeWidth={12}
        styles={{
          path: {
            strokeLinecap: 'butt',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center center',
            stroke: `rgba(248, 182, 2, ${75 / 100})`,
          },
          trail: {
            strokeLinecap: 'butt',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center center',
          },
          text: {
            fill: '#000',
          },
        }}
      />
    </div>
  )
}
