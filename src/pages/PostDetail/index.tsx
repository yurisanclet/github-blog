import { PostCard } from './components/PostCard'
import { PostDescription } from './components/PostDescription'
import { PostContainer, PostContent } from './style'

export function Post() {
  return (
    <PostContainer>
      <PostContent>
        <PostCard />
        <PostDescription />
      </PostContent>
    </PostContainer>
  )
}
