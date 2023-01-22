import './App.css';  
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
function App() {
  return (
     <div>
      <Router>
        <div className='container'>
          <HeaderComponent/><br></br><br></br>
          <div className='container'>
            <Routes>
              <Route  path="/employee" element ={<ListEmployeeComponent/>}></Route>
              <Route  path="/" exact element={<ListEmployeeComponent/>}></Route>
              <Route  path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
              <Route  path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
            </Routes>
          </div>
          <FooterComponent/>
        </div>
      </Router>
     
     </div>
  );
}

export default App;
