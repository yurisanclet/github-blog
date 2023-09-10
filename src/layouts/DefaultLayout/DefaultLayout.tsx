import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  // o Outlet é um espaço em que vai ser inserido um conteúdo. O react-router-dom quando ele estiver usando esse layout com o Outlet, ele vai saber exatamente aonde que ele tem que posicionar o conteúdo que é especifico de uma página. Nesse caso, o conteúdo especifico da Home, e do History. Esses conteúdos vão ser posicionados no lugar do Outlet
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
