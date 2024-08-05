import { RouterProvider } from 'react-router-dom'
import { ROUTER_MAP } from './routes'

const Routing = () => {
  return (
    <RouterProvider router={ROUTER_MAP} />
  )
}

export default Routing