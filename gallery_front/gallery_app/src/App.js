import React from 'react';
import './App.css';
import './css/tailwind.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./routes/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </Router>

  )
}

export default App;
