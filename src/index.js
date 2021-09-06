import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// styles
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './theme'
import './index.css'
import App from './components/App/App'
import Home from './views/Home'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </App>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);