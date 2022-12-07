import React from "react";
import { API } from "../config";

const MostrarImg = ({ item}) => {
  let ruta = ".jpg"
  return (
    <div className="product-img">
      {console.log(ruta)}
      <img
        src={require(`../img/${item.imagen}`).default}
        alt={item.nombre}
        className="mb3 img-cont"
        style={{ maxHeight: "600px", maxwidth: "300px" }}
      />
    </div>
  );
};

export default MostrarImg;