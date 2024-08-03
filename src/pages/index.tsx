import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ROUTER_MAP } from '@shared/routes'

const Routing = () => {
  return (
    <RouterProvider router={ROUTER_MAP} />
  )
}

export default Routing