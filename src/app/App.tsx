import axios from "axios"
import Routing from "./routes"

const App = () => {
  axios.get(`http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}/user/cookie`)
  return (
    <>
      <Routing />
    </>
  )
}

export default App
