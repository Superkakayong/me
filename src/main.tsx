import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import '../src/styles/global/index.css'
import { BrowserRouter } from 'react-router-dom'
// Dayong: 引入 Vercel Analytics 组件以统计访问数据
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <>
      <App />
      {/* Dayong: 在根布局里挂载 Analytics，确保页面访问被记录 */}
      <Analytics />
    </>
  </BrowserRouter>
)
