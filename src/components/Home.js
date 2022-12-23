import React from 'react'

const Home = () => {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://images.ctfassets.net/1sv59kqumaqp/2ADoT6m1c84hnTZ2VD4YH/e581bb87c9896c7f953c97cb34b4ee7f/mascotas.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://media.revistagq.com/photos/627a32e548e657e5f9e1d502/16:9/w_2560%2Cc_limit/eric-ward-ISg37AI2A-s-unsplash.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://images.ctfassets.net/1sv59kqumaqp/2ADoT6m1c84hnTZ2VD4YH/e581bb87c9896c7f953c97cb34b4ee7f/mascotas.png" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>


  )
}

export default Home