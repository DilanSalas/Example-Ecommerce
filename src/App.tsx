import { BrowserRouter } from "react-router"
import { AppRouter } from "./routes/AppRouter"


export const App = () => {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
