import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetail from './pages/Exercisedetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
    </BrowserRouter>
    </>
  );
}

export default App;
