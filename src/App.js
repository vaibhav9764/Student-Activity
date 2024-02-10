import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Temp from './Components/Temp';
import SignUpForm from './Components/SignUpForm';





function App() {
  return (
    <>
     <Routes>
          {/* <Route exact path="/" element={<Temp/>} /> */}
          <Route exact path="/" element={<SignUpForm/>} />
       
        </Routes>



      
    </>
  );
}

export default App;
