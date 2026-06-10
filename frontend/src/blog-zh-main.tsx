import React from 'react'
import ReactDOM from 'react-dom/client'
import BlogPage from './BlogPage'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlogPage lang="zh" />
  </React.StrictMode>,
)
