import { Routes, Route } from "react-router-dom";

import { Home, RestaurantMenu } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/restaurants/:id" element={<RestaurantMenu/>} />
      </Routes>
    </div>
  )
}

export default App;