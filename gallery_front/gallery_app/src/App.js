import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Index from "./pages/index.js";
import Singup from './routes/Singup.js';
import Navber from './components/Navbar/index.js';
import Gallery from './routes/gallery.js';
function App() {







  return (
    <Router>
      <Navber />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
  )
}

export default App;