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

//Praktikum 4

//function Kartu (props) {
  //return <h1>Halo, {props.nim} - {props.nama}</h1>;
//}

//function App() {
  //return (
    //<div>
      //<Kartu nim="1841720153" nama="Ika" />
      //<Kartu nim="456" nama="Vira" />
      //<Kartu nim="789" nama="Hilmi" />
    //</div>
  //);
//}

//Praktikum 5
function Avatar (props) {
  return (
    <img width="77px" className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Komentar (props) {
  return (
    <div className="Komentar">
      <UserInfo user={props.author} />
      <div className="Komentar-text">
        {props.text}
      </div>
      <div className="Komentar-date">
        {props.date}
      </div>
    </div>
  );
}

function App() {
  let me = {name:"Ika Lailatuzzahro", avatarUrl:logo}
  return (
    <div>
      <Komentar text="1841720153" date="1 Maret 2021" author={me} />
    </div>
  );
}

export default App;
