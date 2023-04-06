import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
      </Routes>
      <Footer/>
    </Box>
    </BrowserRouter>
    </>
  );
}

export default App;
