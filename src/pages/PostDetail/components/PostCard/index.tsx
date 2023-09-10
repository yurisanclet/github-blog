import {
  GithubLogo,
  CaretLeft,
  CalendarBlank,
  ChatCircle,
} from 'phosphor-react'
import { PostHeaderContent, PostInfoFooter, PostLinks, PostTile } from './style'

export function PostCard() {
  return (
    <PostHeaderContent>
      <PostLinks>
        <div>
          <a href="/">
            <span>
              <CaretLeft />
            </span>
            <span>VOLTAR</span>
          </a>
        </div>
        <div>
          <a href="">VER NO GITHUB</a>
        </div>
      </PostLinks>
      <PostTile>JavaScript data types and data structures</PostTile>
      <PostInfoFooter>
        <div>
          <GithubLogo />
          <p>yurisanclet</p>
        </div>
        <div>
          <CalendarBlank />
          <p>Há 1 dia</p>
        </div>
        <div>
          <ChatCircle />
          <p>5 comentários</p>
        </div>
      </PostInfoFooter>
    </PostHeaderContent>
  )
}
