import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-color: #1562af24;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  h2 {
    font: 1.5rem Coda 400, sans-serif;
    color: ${(props) => props.theme['brand-blue']};
  }
`
