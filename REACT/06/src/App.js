import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"  //모듈설치 각

import About from './06ROUTE/About';
import Contact from './06ROUTE/Contact';
import Home from './06ROUTE/Home';

function App() {
  //State 컴포넌트 내에서 유지 시켜야 할 값
  // 한쪽에서 다른 쪽으로 전달 , 상위 컴포넌트 -> 하위 컴포넌트로 전달할때 하는 변수? : 프록스
  // ? => null 이여 도 상관 x
  const footerState = "Footer State.."
  const headerState = "Header State.."
  return (
    <div className="App">
      <h1>REACT ROUTE</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/contact/:name?/:age?" element = {<Contact />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;