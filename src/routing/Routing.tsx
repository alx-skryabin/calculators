import React, {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'
import {BaseLayout} from '../components/layout/base-layout/BaseLayout'
import {PATHS} from '../configs/route-paths.config'
import NotFound from '../components/parts/not-found/NotFound'

/*Pages*/
const Main = lazy(() => import('../pages/main/Main'))
const CompoundPercent = lazy(() => import('../pages/compound-percent/CompoundPercent'))
const BasePercent = lazy(() => import('../pages/base-percent/BasePercent'))


export const Routing = () => {
  return (
    <Routes>
      <Route element={<BaseLayout/>}>
        <Route path={PATHS.main} element={<Main/>}/>
        <Route path={PATHS.compoundPercent} element={<CompoundPercent/>}/>
        <Route path={PATHS.basePercent} element={<BasePercent/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
