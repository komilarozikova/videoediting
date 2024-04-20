import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lessons from './components/pages/Lessons';
import Contacts from './components/pages/Contacts';
import Footage from './components/Navori/Footage';
import Fullpacage from './components/Navori/Fullpackage';
import Zvuki from './components/Navori/Zvuki';
import Luts from './components/Navori/Luts';


function App() {

  return (
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element= {<MainPage />}/>
      <Route path="/lessons" element= {<Lessons />}/>
      <Route path="/contacts" element= {<Contacts />}/>
      <Route path="/footage" element= {<Footage />}/>
      <Route path="/fullpack" element= {<Fullpacage />}/>
      <Route path="/zvuk" element= {<Zvuki />}/>
      <Route path="/luts" element= {<Luts />}/>
    </Routes>
</BrowserRouter>


  );
}

export default App;
