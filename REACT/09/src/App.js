import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Compoenet_01 from './STYLING/01Basic';
import Compoenet_02 from './STYLING/02Scss';
import Component_03 from './STYLING/03BootStrap';

function App() {
  return (
    <div>
      {/*  */}
      <Compoenet_01 />
      <hr />
      {/*  */}
      <Compoenet_02 />
      <hr />
      <Component_03 />
    </div>
    
  );
}

export default App;
