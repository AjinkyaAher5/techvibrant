import logo from './logo.svg';
import './App.css';
import Tables from './componets/tables'
import Sub from './componets/sub';
import TotalMarks from './componets/TotalMarks';
import {Routes,Route}from "react-router-dom"
import Home from './componets/Home';

function App() {
  return (
    <div className="App">
      <Home/>

      <Routes>
        <Route exact path="/tables" element={<Tables/>}/>
        <Route exact path="/sub" element={<Sub/>}/>
        <Route exact path="/total" element={<TotalMarks/>}/>


      </Routes>

      
    
  
    </div>
  );
}

export default App;
