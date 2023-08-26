
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
import Clients from './Components/ClientPartner/Clients/Clients';
import Partners from './Components/ClientPartner/Partners/Partners';
import Urban from './Components/AllSectors/Urban/Urban';
import Transport from './Components/AllSectors/Transport/Transport';
import Energy from './Components/AllSectors/Energy/Energy';
import Tourism from './Components/AllSectors/Tourism/Tourism';
import Enviroment from './Components/AllSectors/Enviroment/Enviroment';
import FoodSafety from './Components/AllSectors/FoodSafety/FoodSafety';
import Information from './Components/AllSectors/Information/Information';
import Study from './Components/Archive/Study/Study';
import WorkExperiences from './Components/Archive/WorkExperiences/WorkExperiences';
import Capacity from './Components/AllSectors/Capacity/Capacity';
import Employee from './Components/Archive/Employee/Employee';


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



          <Route path="/urban" element={<Urban />}>
          </Route>
          <Route path="/transport" element={<Transport />}>
          </Route>
          <Route path="/energy" element={<Energy />}>
          </Route>
          <Route path="/tourism" element={<Tourism />}>
          </Route>
          <Route path="/information" element={<Information />}>
          </Route>
          <Route path="/enviroment" element={<Enviroment />}>
          </Route>
          <Route path="/foodSafety" element={<FoodSafety />}>
          </Route>
          <Route path="/capacity" element={<Capacity />}>
          </Route>




          <Route path="/clients" element={<Clients />}>
          </Route>
          <Route path="/partners" element={<Partners />}>
          </Route>


          <Route path="/study" element={<Study />}>
          </Route>
          <Route path="/employee" element={<Employee />}>
          </Route>
          <Route path="/work" element={<WorkExperiences />}>
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
