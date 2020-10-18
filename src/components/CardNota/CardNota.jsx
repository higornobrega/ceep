import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";
//import DeleteSVG from "../../assets/img/delete.svg";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}
//<img src={DeleteSVG}
export default CardNota;
