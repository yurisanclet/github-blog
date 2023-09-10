import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Post } from './pages/PostDetail'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Route>
    </Routes>
  )
}
