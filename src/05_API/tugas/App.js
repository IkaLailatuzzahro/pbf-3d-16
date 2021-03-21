import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Beranda() {
  return (
    <div class="card">
      <div class="card-header">
        Pengantar
    </div>
      <div class="card-body">
        <h3 class="card-title">API dan React Router di ReactJS</h3>
        <blockquote class="blockquote mb-0">
          <p>Pada codelab ini Anda akan mempelajari tentang pengambilan data melalui API (Application Programming Interface) dan penggunaan React Router.</p>
        </blockquote>
      </div>
      <div class="card-body">
        <h3 class="card-title">Pengetahun yang harus miliki</h3>
        <ul class="list-unstyled">
          <li>Macam-macam deksripsi project yaitu :
    <ul>
              <li>Pemrograman dasar dengan HTML, CSS, dan JavaScript</li>
              <li>Cara membuat project baru di ReactJS</li>
              <li>Konsep DOM (Document Object Model)</li>
              <li>Konsep ReactJS Bagian 1</li>
              <li>Konsep ReactJS Bagian 2</li>
            </ul>
          </li></ul>
      </div>
    </div>
  );
}

function Berita(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,         // jika terjadi gagal ambil data dari API
      isLoaded: false,     // untuk status ketika sedang memuat
      dataArtikel: []      // untuk menampung data API
    };
  }

  // ... isi method selanjutnya di sini ...
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(
        (dataJson) => {
          this.setState({
            isLoaded: true,
            dataArtikel: dataJson
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }
  render() {
    const { error, isLoaded, dataArtikel } = this.state;

    if (error) {
      return <div>Terjadi galat: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Sedang memuat...</div>;
    } else {
      return (
        <div>
          <h2>Daftar Artikel</h2>
          {
            dataArtikel.map(artikel => {
              return <Berita judul={artikel.title} isiArtikel={artikel.body} />
            })
          }
        </div>
      );
    }
  }

}

function Tentang() {
  return (
    <div class="card border-light">
      <div class="card-header">Tentang</div>
      <div class="card-body">
        <li>Nama : Ika Lailatuzzahro</li>
        <li>Kelas : TI3D</li>
        <li>NIM : 1841720153</li>
        <li>Alamat : Jombang</li>
      </div>

    </div>
  );
}

function Codelabs() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Codelabs</h2>
      <ul>
        <li>
          <Link to={`${match.url}/konsep-reactjs`}>
            <p>Konsep ReactJS</p>
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/belajar-react-router`}>
            Belajar React Router
          </Link>
        </li>
      </ul>

      {/* Pada halaman Codelabs ini memiliki <Switch> sendiri dengan beberapa route lagi
          di dalam URL /codelabs . Pada bagian route kedua merupakan route default atau
          jika tidak satu pun link topik dipilih. */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topik />
        </Route>
        <Route path={match.path}>
          <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topik() {
  let { topicId } = useParams();
  return <h3>Topik yang terpilih: {topicId} <p>Konsep dalam penggunaan ReactJS ada beberapa yang penting, diantaranya tentang JavaScript XML (JSX), melakukan render element,
    membuat component dan penggunaan props, memanfaatkan state dan lifecycle, menangani event, kondisional rendering, penggunaan list dan key, serta penggunaan forms.</p> </h3>;
}

export default function App() {
  return (
    <Router>
      <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">React Js</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" class="nav-link"><button type="button" class="btn btn-warning">Beranda</button></Link>
                </li>
                <li class="nav-item">
                  <Link to="/berita" class="nav-link"><button type="button" class="btn btn-warning">Berita</button></Link>
                </li>
                <li class="nav-item">
                  <Link to="/tentang" class="nav-link"><button type="button" class="btn btn-warning">Tentang</button></Link>
                </li>
                <li class="nav-item">
                  <Link to="/codelabs" class="nav-link"><button type="button" class="btn btn-warning">Codelabs</button></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="card" >
          <div class="card-body">

          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">


              <Switch>
                <Route path="/berita">
                  <Blog />
                </Route>
                <Route path="/tentang">
                  <Tentang />
                </Route>
                <Route path="/codelabs">
                  <Codelabs />
                </Route>
                <Route path="/">
                  <Beranda />
                </Route>
              </Switch>
            </blockquote>
          </div>
        </div>
      </div>
    </Router>
  );
}