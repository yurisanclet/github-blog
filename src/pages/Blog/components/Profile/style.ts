import styled from 'styled-components'

export const ProfileContent = styled.div`
  width: 54rem;
  height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 12px;
  margin-top: calc(0px - 5.5rem);
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileHeader = styled.div``

export const ProfileInfoFooter = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
