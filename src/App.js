import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lessons from './components/pages/Lessons';
import Contacts from './components/pages/Contacts';


function App() {

  return (
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element= {<MainPage />}/>
      <Route path="/lessons" element= {<Lessons />}/>
      <Route path="/contacts" element= {<Contacts />}/>
    </Routes>
</BrowserRouter>


  );
}

export default App;
