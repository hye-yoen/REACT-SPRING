import logo from './logo.svg';
import './App.css';

import Component_01 from './05조건부랜더링/01Component';
import Component_02 from './05조건부랜더링/02Component';
import Component_03 from './05조건부랜더링/03Component';

function App() {
  //State 컴포넌트 내에서 유지 시켜야 할 값
  // 한쪽에서 다른 쪽으로 전달 , 상위 컴포넌트 -> 하위 컴포넌트로 전달할때 하는 변수? : 프록스
  const footerState = "Footer State.."
  const headerState = "Header State.."
  return (
    <div className="App">
      <h1>조건부 랜더링</h1>
      {/* {if} */}
      <Component_01 isAuth={true} />
      <hr/>
      {/* {삼항연산자} */}
      <Component_02 isAuth={true} />
      <hr/>
      {/* {&&} */}
      <Component_03 items={['aaa','bbb','ccc','ddd']}/>
    </div>
  );
}

export default App;