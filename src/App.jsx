import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Character from "./pages/Character"
import Location from "./pages/Location"
import Episode from "./pages/Episode"
import CharacterDetail from "./pages/CharacterDetail"
import LocationDetail from "./pages/LocationDetail"
import EpisodeDetail from "./pages/EpisodeDetail"


function App() {

  return (
    <div className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/character" element={<Character />} />
        <Route path="/character/:id" element={<CharacterDetail />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<LocationDetail />} />

        <Route path="/episode" element={<Episode />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
      </Routes>
    </div>
  )
}

export default App
