import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import {store} from './store/store'
import {Provider} from 'react-redux'
import './index.scss'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
