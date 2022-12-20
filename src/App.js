import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';
import Productos from './components/Productos/Productos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Galeria from './components/Checkout/Inicio';
import Inicio from './components/Checkout/Inicio';



function App() {
  return (

    
    <div className="Apps">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Inicio/>} />
        <Route path='/' element= {<Galeria/>} />
        <Route path='/' element= {<Productos/>} />


      </Routes>
      </BrowserRouter>
      <Carousel/>
    
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

      <div className='d-flex'>
      <Productos
        titulo={"Old Prince"}
        descripcion={"Alimento para perros"}
        imagen={"data:image/jpeg;base64,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"}
        btnText={"Ver mas"}
      />

     <Productos
        titulo={"Pro Plan"}
        descripcion={"Alimento para Gatos"}
        imagen={"https://http2.mlstatic.com/D_NQ_NP_800792-MLA48098755343_112021-O.jpg"}
        btnText={"Leer mas"}
      />

    <Productos
        titulo={"Pio-Pa"}
        descripcion={"Alimento para Aves"}
        imagen={"https://static.miscota.com/media/1/photos/products/113919/113919-8422250460106_1_g.jpeg"}
        btnText={"Explorar"}
      />

    <Productos
        titulo={"Cunipic Conejos"}
        descripcion={"Alimento para Conejos"}
        imagen={"https://static.miscota.com/media/1/photos/products/012376/baby-toy-mini-supertoy_1_g.jpeg"}
        btnText={"Explorar"}
      />

      </div>
    </div>
  
  );
}

export default App;
