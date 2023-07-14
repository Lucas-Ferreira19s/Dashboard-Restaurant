import * as C from './styles'

import foto from '../../assets/profile.png'

export function ProfileOrder() {
  return (
    <C.Container>
      <img src={foto} alt='' />
      <div>
        <h5>Ruby Roben</h5>
        <p>User since 2020</p>
      </div>
    </C.Container>
  )
}
