import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Games from "./Games";
import Search from "./Search";
import Wishlist from "./Wishlist";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/search" element={<Search />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
