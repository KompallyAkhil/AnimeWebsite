import Navbar from "./Components/Navbar.jsx";
import About from "./Pages/About.jsx";
import Movies from "./Pages/Movies.jsx";
import SignUp from "./Pages/Login.jsx";
import RegisterForm from "./Pages/RegisterForm.jsx";
import { Route,Routes } from "react-router-dom";
function App(){
  return(<>
  <Navbar/>
  
    <Routes>
      <Route index path="/" element={<About />} />
      <Route index path="/about" element={<About/>}></Route>
      <Route path="/anime" element={< Movies/>}></Route>
      <Route path="/Login" element={<SignUp/>}></Route>
      <Route path="/RegisterForm" element={<RegisterForm/>}></Route>
    </Routes>
  </>
  
  )
}

export default App;