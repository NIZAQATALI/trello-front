
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Board from './pages/Board/Board';
import Member from './pages/member/Member';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { makeStyles } from '@mui/styles';
import Tabel from './pages/table/Tabel';
import Calendar from './pages/Calendar/Calendar';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  appBar: {
    width: '100%', // Navbar takes 100% width
    height:'60px',
  },

  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width:'100vw ',
    height: `calc(100vh - 60px)`,
   
  },
  sidebar: {
    flex: 4, // Sidebar takes 4 parts of the available space
    
  },
  content: {
    flex: 8, // Container takes 8 parts of the available space
    padding: '10px 20px',
    backgroundColor: 'blue'
  },
}));

function App() {
  const classes = useStyles();
  return (
 
   <>
   <div className={classes.root}>
      <BrowserRouter>
      <div position="fixed" className={classes.appBar}>
      <Navbar   />
      </div>
       <div className={classes.Container}>
       <Sidebar  />
       
       
        <div className={classes.content}> 

        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/board' element={<Board />} />
              <Route path='/member' element={<Member/>}/>
              <Route path='/tabel' element={<Tabel />} />
              <Route path='/calendar' element={<Calendar/>}/>
         
            </Routes>
        </div>
        </div>
            
        
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
