import logo from './logo.svg';
import './App.css';

import ParentComponent_01 from './07/01Parent';
import CustomProvider from './07/Provider';



function App() {
  //State 컴포넌트 내에서 유지 시켜야 할 값
  // 한쪽에서 다른 쪽으로 전달 , 상위 컴포넌트 -> 하위 컴포넌트로 전달할때 하는 변수? : 프록스
  // ? => null 이여 도 상관 x
  const footerState = "Footer State.."
  const headerState = "Header State.."
  return (
    <CustomProvider>
      <div className="App">
        <h1>컴포넌트 간 통신</h1>
        {/* 부모 -> 자식 전달(props) */}
        {/* 자식 -> 부모 전달(callbock) */}
        <ParentComponent_01 />
        <hr />
        {/* 컴포넌트간의 데이터 공유 - CantextAPI */}
        {/* provider> app + context : 전역화 가능*/}
      </div>
    </CustomProvider>
  )
}

export default App;