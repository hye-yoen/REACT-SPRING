import logo from './logo.svg';
import './App.css';

import MyComponent from './03COMPONENT/MyComponent';

function App() {
  //State 컴포넌트 내에서 유지 시켜야 할 값
  // 한쪽에서 다른 쪽으로 전달 , 상위 컴포넌트 -> 하위 컴포넌트로 전달할때 하는 변수? : 프록스
  const footerState = "Footer State.."
  const headerState = "Header State.."
  return (
    <div className="App">
      <h1> COMPONENT_TEST</h1>
      <MyComponent />
    </div>
  );
}

export default App;