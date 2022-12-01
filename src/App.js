import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="Apps">
      <Navbar/>
      <Carousel/>
      <header className="App-header bg-success">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className='d-flex'>
      <Card
        titulo={"Perros"}
        descripcion={"blablablabla"}
        imagen={"https://t1.ea.ltmcdn.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg"}
        btnText={"Ver mas"}
      />

     <Card
        titulo={"Gatos"}
        descripcion={"blablablabla"}
        imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stray_calico_cat_near_Sagami_River-01.jpg/640px-Stray_calico_cat_near_Sagami_River-01.jpg"}
        btnText={"Leer mas"}
      />

    <Card
        titulo={"Aves"}
        descripcion={"blablablabla"}
        imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Fringilla_coelebs_chaffinch_male_edit2.jpg/1200px-Fringilla_coelebs_chaffinch_male_edit2.jpg"}
        btnText={"Explorar"}
      />

    <Card
        titulo={"Tortugas"}
        descripcion={"blablablabla"}
        imagen={"https://www.nationalgeographic.com.es/medio/2022/06/10/tortuga-gigante-fantastica-de-la-isla-fernandina-galapagos_8c694854_800x800.jpg"}
        btnText={"Explorar"}
      />

    <Card
        titulo={"Conejos"}
        descripcion={"blablablabla"}
        imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oryctolagus_cuniculus_Tasmania_2.jpg/1200px-Oryctolagus_cuniculus_Tasmania_2.jpg"}
        btnText={"Explorar"}
      />

      </div>
    </div>
  );
}

export default App;
