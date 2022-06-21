import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
            <div className="card" style={{minWidth: "200px"}}>
                <img src={item.image} alt="Imagen rikanmorty" />
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{item.name}</h5>
                    <hr />
                    {    item.status =="Alive" ? <p className="fw-bold">Status: <span className="text-success fw-bold">Alive</span> </p>: item.status =="Dead" ? <p><span className="fw-bold">Status</span> <span className="text-danger fw-bold">Dead</span></p>: <p><span className="fw-bold">Status:</span> <span className="text-dark fw-bold">Unknown</span></p>}
                    <p><span className="fw-bold">Specie</span>: {item.species}</p>
                    {  item.type == "" ? "" : <p><span className="fw-bold">Type:</span> {item.type}</p>}
                    <p><span className="fw-bold">Gender:</span> { item.gender}</p>
                    <p><span className="fw-bold">Origin:</span> {item.origin.name}</p>
                    <p><span className="fw-bold">Location:</span> {item.location.name}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
