import { HeaderContainer, HeaderContent } from './style'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={Logo} height={40} width={46} alt="Logo github" />
        </div>
        <div>
          <h2>GITHUB BLOG</h2>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
