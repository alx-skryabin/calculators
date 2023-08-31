import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ConfigProvider} from 'antd'
import AntdCustomTheme from './configs/antd-theme.config'
import {Routing} from './routing/Routing'
import {FullScreenLoader} from './components/ui/loaders/FullScreenLoader'
import './App.scss'

function App() {
  return (
    <ConfigProvider theme={AntdCustomTheme}>
      <BrowserRouter>
        <Suspense fallback={<FullScreenLoader/>}>
          <div className="as__app">
            <Routing/>
          </div>
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
