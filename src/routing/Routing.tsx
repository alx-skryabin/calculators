import React, {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
import {BaseLayout} from '../components/layout/base-layout/BaseLayout'
import {PATHS} from '../configs/route-paths.config'
import NotFound from '../components/parts/not-found/NotFound'

/*Pages*/
const Main = lazy(() => import('../pages/main/Main'))
const CompoundPercent = lazy(() => import('../pages/compound-percent/CompoundPercent'))


export const Routing = () => {
  const {main, compoundPercent} = PATHS

  return (
    <Routes>
      <Route element={<BaseLayout/>}>
        <Route path={main} element={<Main/>}/>
        <Route path={compoundPercent} element={<CompoundPercent/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
