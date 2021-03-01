import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
//  <React.StrictMode>
 //   <App />
  //</React.StrictMode>,
 // document.getElementById('root')
//);

//Pratikum 1 Pertama
//const nimNama = '1841720153 - Ika Lailatuzzahro';
//const element = <h1>Hello, {nimNama}</h1>;

//ReactDOM.render(
  //element,
  //document.getElementById('root')
//);

//Pratikum 1 kedua
//function formatNama (user) {
 // return user.nim + ' - ' + user.nama;
//}

//const user = {
  //nim: '1841720153',
  //nama: 'Ika Lailatuzzahro'
//};

//const element = (
 // <h1>
   // Halo, {formatNama(user)}!
  //</h1>
//);

//ReactDOM.render(
  //element,
  //document.getElementById('root')
//);

//Pratikum 2
//function jam() {
  //const element = (
    //<div>
      //<h1>Sekarang Jam:</h1>
      //<h2>{new Date().toLocaleTimeString()}</h2>
    //</div>
  //);
  //ReactDOM.render(element, document.getElementById('root'));
//}

//setInterval(jam, 1000)

//Praktikum 3
//function Kartu(props) {
  //return <h1>Halo, {props.nim} - {props.nama}</h1>;
//}

//const element = <Kartu nama="Ika Lailatuzzahro" nim="1841720153" />;

//ReactDOM.render(
  //element,
  //document.getElementById('root')
//);

//Praktikum 4
//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App.js'

//ReactDOM.render(
  //<App />,
  //document.getElementById('root')
//);

//Praktikum 5
class Jam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Halo, 1841720153 - Ika Lailatuzzahro</h1>
        <h2>Sekarang jam: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Jam />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
