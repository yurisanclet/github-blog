import { styled } from 'styled-components'

export const PostHeaderContent = styled.div`
  width: 100%;
  height: 10.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 12px;
  margin-top: calc(0px - 5rem);
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`

export const PostLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    display: block;
    font-weight: bold;
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme['brand-blue']};
  }
`

export const PostTile = styled.h2`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
`

export const PostInfoFooter = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
