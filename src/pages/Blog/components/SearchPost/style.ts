import styled from 'styled-components'

export const SearchPostInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
`

export const SearchPostContent = styled.div`
  width: 54rem;
  margin-top: 4rem;
`

export const QuantityPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`
