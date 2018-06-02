import React from 'react'
import { render as reactRender } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import App from './components/App'

injectGlobal`
  ${normalize()};
`

const node = document.getElementById('root')
reactRender(<App />, node)
