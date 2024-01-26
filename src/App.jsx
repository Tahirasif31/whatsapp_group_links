import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import News from "./pages/News";
import Home from "./pages/Home";
import Business from "./pages/business";
import Cricket from "./pages/Cricket";
import Pubg from "./pages/Pubg";
import Others from "./pages/Others";
import Girls from "./pages/Girls";
import ContactUs from "./pages/ContactUs";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Main />} />
          <Route path="news" element={<News />} />
          <Route path="business" element={<Business />} />
          <Route path="cricket" element={<Cricket />} />
          <Route path="pubg" element={<Pubg />} />
          <Route path="girls" element={<Girls />} />
          <Route path="others" element={<Others />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
