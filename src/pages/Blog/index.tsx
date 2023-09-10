import { Profile } from './components/Profile'
import { SearchPost } from './components/SearchPost'
import { BlogContainer, BlogContent, PostsListContainer } from './style'
import { Post } from './components/Post'

export function Blog() {
  return (
    <BlogContainer>
      <BlogContent>
        <Profile />
        <SearchPost />
        <PostsListContainer>
          <Post />
          <Post />
          <Post />
        </PostsListContainer>
      </BlogContent>
    </BlogContainer>
  )
}
