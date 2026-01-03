import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Provider } from "@/components/ui/provider"
import Landing from "@/pages/Landing"
import Leaderboard from "@/pages/Leaderboard";

const App = () => {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
