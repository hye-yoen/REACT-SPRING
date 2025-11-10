import logo from './logo.svg';
import './App.css';

import EventComponent_01 from './04EVENT/01OnClick';
import EventComponent_02 from './04EVENT/02OnMouse';
import EventComponent_03 from './04EVENT/03OnKey';
import EventComponent_04 from './04EVENT/04OnChange';
import EventComponent_05 from './04EVENT/05Form.jsx';
import EventComponent_06 from './04EVENT/06OnScroll.jsx';

function App() {
  //State 컴포넌트 내에서 유지 시켜야 할 값
  // 한쪽에서 다른 쪽으로 전달 , 상위 컴포넌트 -> 하위 컴포넌트로 전달할때 하는 변수? : 프록스
  const footerState = "Footer State.."
  const headerState = "Header State.."
  return (
    <div className="App">
      <h1> Event HandLING</h1>
      {/* 01 onClick*/}
      <EventComponent_01 />
      <hr/>
      {/* 02 onMouse*/}
      <EventComponent_02 />
      <hr/>
      {/* 03 onKey*/}
      <EventComponent_03 />
      <hr/>
      {/* 04 onChange*/}
      <EventComponent_04 />
      <hr/>
      {/* 05 onForm*/}
      <EventComponent_05 />
      <hr/>
      {/* 06 onScroll*/}
      <EventComponent_06 />
      <hr/>
    </div>
  );
}

export default App;