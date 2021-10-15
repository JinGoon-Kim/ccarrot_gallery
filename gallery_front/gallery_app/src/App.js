import logo from './logo.svg';
import './App.css';
import './css/tailwind.css';
import './css/App.scss';
import { useState } from 'react';



function App() {
  // [a,b] = [10, 100];
  //useState는 항상 두개의 데이터를 준다.

  //useState는 사이트내에서 바뀔때 새로고침없이 재 랜더링 해준다. 변경이 될 데이터들을 state를 만들어서 넣어준다.
  let [글제목, 글제목변경] = useState('HIHI');

  return (
    <div className="App">
      <header className="nav">
        CCARROT
      </header>
      <h3 className="text">
        { 글제목 }
      </h3>
      <figure><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></figure>
    </div>
  );
}

export default App;
