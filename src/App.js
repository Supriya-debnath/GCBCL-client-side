
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import About from './Components/Home/AboutUs/About';
import Contact from './Components/Home/ContactUs/Contact';
import Blogs from './Components/Home/Blogs/Blogs';
import Service from './Components/Home/Service/Service';
import Footer from './Components/Home/Footer/Footer';
import Infrastructure from './Components/OurAllServices/Infrastructure/Infrastructure';
import BankService from './Components/OurAllServices/BankService/BankService';
import Training from './Components/OurAllServices/Training/Training';
import ServeyService from './Components/OurAllServices/ServeyService/ServeyService';
import History from './Components/AllAboutUs/History/History';
import BoardDirector from './Components/AllAboutUs/BoardDirector/BoardDirector';
import CoreTeam from './Components/AllAboutUs/CoreTeam/CoreTeam';
import CSR from './Components/AllAboutUs/CSR/CSR';


function App() {
  return (
   <>
    <Header></Header>
   <Routes>
        <Route exact path="/" element={<Home />}>
          </Route>

          <Route path="/home" element={<Home />}>
          </Route>


          <Route path="/about" element={<About />}>
          </Route>

          <Route path="/services" element={<Service />}>
          </Route>
          

          <Route path="/Infrastructure" element={<Infrastructure />}>
          </Route>
          <Route path="/bankService" element={<BankService />}>
          </Route>
          <Route path="/training" element={<Training />}>
          </Route>
          <Route path="/servey" element={<ServeyService />}>
          </Route>



          <Route path="/history" element={<History />}>
          </Route>
          <Route path="/director" element={<BoardDirector />}>
          </Route>
          <Route path="/coreTeam" element={<CoreTeam />}>
          </Route>
          <Route path="/csr" element={<CSR />}>
          </Route>


          

          <Route path="/blogs" element={<Blogs />}>
          </Route>

          <Route path="/contact" element={<Contact />}>
          </Route>

  </Routes>
    <Footer></Footer>

   </>
  );
}

export default App;
