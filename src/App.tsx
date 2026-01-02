import { Route, Routes, BrowserRouter } from "react-router-dom"
import Landing from "@/pages/Landing"
import Leaderboard from "@/pages/Leaderboard";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
