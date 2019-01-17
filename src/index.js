import React from 'react'
import { render } from 'react-dom'

import './styles/reset.css'
import './styles/global.css'

// import App from './components/app'
import App from './components/app-hoc'

const rootEl = document.getElementById('app')

render(<App />, rootEl)
