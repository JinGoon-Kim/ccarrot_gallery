import React from 'react';
import './App.css';
import './css/tailwind.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Index from "./pages/index.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App;