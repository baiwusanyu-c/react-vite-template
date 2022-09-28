import React from 'react'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import './assets/style/reset.scss'
import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <HashRouter>
        <App />,
    </HashRouter>,
)
