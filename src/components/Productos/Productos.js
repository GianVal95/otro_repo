import React from 'react'

const Productos = (props) => {
  const {titulo, descripcion, imagen, btnText} = props; 
  return (
    <div className="card" style={{width:"18rem"}}>
  <img src={imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{descripcion}</p>
    <a href="#" className="btn btn-primary">{btnText}</a>
  </div>
</div>
  )
}

export default Productos