import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 26rem;
  height: 16rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border-color 1s;
    cursor: pointer;
  }
`

export const PostTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  span {
    display: block;
    font-size: 0.775rem;
    white-space: nowrap;
  }
`

export const PostDescription = styled.div`
  margin-top: 1.5rem;
`
