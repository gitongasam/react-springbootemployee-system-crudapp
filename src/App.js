import './App.css';  
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
function App() {
  return (
     <div>
      <Router>
        <div className='container'>
          <HeaderComponent/><br></br><br></br>
          <div className='container'>
            <Routes>
              <Route exact path='/employees' element={<ListEmployeeComponent/>}></Route>
              <Route exact path='/' element={<ListEmployeeComponent/>}></Route>

            </Routes>

          </div>
          <FooterComponent/>
        </div>
      </Router>
     </div>
  );
}

export default App;
