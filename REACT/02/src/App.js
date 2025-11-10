import logo from './logo.svg';
import './App.css';
//컴포넌트 연결
import { Element1, Element2, Element3, Element4, Element5 } from "./02JSX/01_BASIC"
import Basic_01 from "./02JSX/01_BASIC"
import CustomComponent from "./02JSX/CustomComponent"
import {Component_Event_01,Component_Event_02,Component_Event_03} from "./02JSX/03_Event"

function App() {
  //State 컴포넌트 내에서 유지 시켜야 할 값
  // 한쪽에서 다른 쪽으로 전달 , 상위 컴포넌트 -> 하위 컴포넌트로 전달할때 하는 변수? : 프록스
  const footerState = "Footer State.."
  const headerState = "Header State.."
  return (
    <div className="App">
      <header className="gnb" style={{height:"100px",backgroundColor:"red"}}>
        <h1>{headerState}</h1>
      </header>
      <main>
        <section>
          <h1>01_BASIC</h1>
          <div>
            <Element1 />
            <Element2 />
            <Element3 auth={"ROLE_USER"} name={"홍길동"} />
            <Element3 auth={"ROLE_ADMIN"} name={"티모"} />
            <hr />
            <Element4 auth={"ROLE_USER"} name={"김범수"} />
            <hr />
            <Element5 list={["aaa", "bbb", "ccc", "ddd"]} />
            <hr />
            <Basic_01.DefaultComponent1 />
            <Basic_01.DefaultComponent2 />
          </div>
          <hr />
        </section>
        <section>
          <h1>02_CUSTOM_COMPONENT</h1>
          <div>
            <CustomComponent />
          </div>
        </section>
        <section>
          <h1>03_EVENT_HANDLER</h1>
          <Component_Event_01 />
          <Component_Event_02 />
          <Component_Event_03 />
        </section>
      </main>
    </div>
  );
}

export default App;