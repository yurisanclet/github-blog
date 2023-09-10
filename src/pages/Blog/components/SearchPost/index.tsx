import { SearchPostInput, SearchPostContent, QuantityPost } from './style'

export function SearchPost() {
  return (
    <SearchPostContent>
      <QuantityPost>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </QuantityPost>
      <SearchPostInput type="text" placeholder="Buscar conteúdo" />
    </SearchPostContent>
  )
}
