import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Admin from './Components/Pages/Admin'
import Career from './Components/Pages/Career'
import Footer from './Components/Footer/Footer.jsx';
import Register from './Components/Pages/Register.jsx';
import Studata from './Components/Pages/Studata.jsx';
import Update from './Components/Pages/Update.jsx'
import Delete from './Components/Pages/Delete.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/career' element={<Career/>}></Route>
          <Route path='/studata' element={<Studata/>}></Route>
          {/* Using dynamic routing we can access each uers data by using useParams() */}
          <Route path='/update/student/:studentID' element={<Update/>}></Route>
          <Route path='/delete/student/:studentID' element={<Delete/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;
