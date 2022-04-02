import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle/index'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme/index'
import '../../tokens/css/tokens.css'
import '../styles/theme/vars.css'

const GlobalProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default GlobalProvider
