import React from 'react'

import {createRoot} from 'react-dom/client'

import App from './components/App'

const ele = document.getElementById('root')

const root = createRoot(ele)

root.render(<App menu={['Home', 'About', 'Contact']}/>);
