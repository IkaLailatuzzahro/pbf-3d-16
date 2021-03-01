import logo from './logo.svg';
import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //1841720153 <code>Ika Lailatuzzahro</code> 
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

//export default App;

//Praktikum 4

function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1841720153" nama="Ika" />
      <Kartu nim="456" nama="Vira" />
      <Kartu nim="789" nama="Hilmi" />
    </div>
  );
}

export default App;