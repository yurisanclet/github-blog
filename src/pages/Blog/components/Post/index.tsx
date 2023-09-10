import { PostContainer, PostDescription, PostTitle } from './style'

export function Post() {
  function handleClickPost() {
    window.location.href = 'http://localhost:5173/post'
  }

  return (
    <PostContainer onClick={handleClickPost}>
      <PostTitle>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </PostTitle>
      <PostDescription>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in
        </p>
      </PostDescription>
    </PostContainer>
  )
}
