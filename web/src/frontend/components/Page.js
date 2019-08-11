import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import Meta from './Meta'

const theme = {
  defaultColor: '#ffffff',
}

class Page extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        {children}
      </ThemeProvider>
    )
  }
}

export default Page
