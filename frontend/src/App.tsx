import {BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import  Search  from "./pages/search"
import Cart from "./pages/cart"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App