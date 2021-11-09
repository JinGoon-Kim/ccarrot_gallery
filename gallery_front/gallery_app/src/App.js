import logo from './logo.svg';
import './App.css';
import './css/tailwind.css';
import './css/App.scss';
import { useState } from 'react';



function App() {
  // [a,b] = [10, 100];
  //useState는 항상 두개의 데이터를 준다.

  //useState는 사이트내에서 바뀔때 새로고침없이 재 랜더링 해준다. 변경이 될 데이터들을 state를 만들어서 넣어준다.
  let [_get, get변경] = useState('hellow Word _get');
  let [_put, put변경] = useState('hellow Word _put');
  let [_delete, delete변경] = useState('hellow Word _delete');
  let [_post, post변경] = useState('hellow Word _post');

  return (
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
}

export default App;