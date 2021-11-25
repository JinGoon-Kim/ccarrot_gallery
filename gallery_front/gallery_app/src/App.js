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
<<<<<<< HEAD
    <div className="App">
      <header>
        <h1>CCARROT</h1>
        <nav>
          
        </nav>
      </header>
      
      <section class="form_test">
        <form action="localhost:8070/api_test" method="get" class="form_example_get">
          <input value={_get}/>
          <button class="request_button" type="submit">GET</button>
        </form>

        <form action="localhost:8070/api_test" method="put" class="form_example_put">
          <input value={_put}/>
          <button class="request_button" type="submit">PUT</button>
        </form>

        <form action="localhost:8070/api_test" method="delete" class="form_example_delete">
          <input value={_delete}/>
          <button class="request_button" type="submit">DELETE</button>
        </form>

        <form action="localhost:8070/api_test" method="post" class="form_example4_post">
          <input value={_post}/>
          <button class="request_button" type="submit">POST</button>
        </form>
      </section>
    </div>
  );
=======
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
  )
>>>>>>> main
}

export default App;