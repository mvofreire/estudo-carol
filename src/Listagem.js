import React from "react";

function ListaItem({ titulo }) {
  return <li>{titulo}</li>;
}

function Listagem({ lista }) {
  return (
    <ul>
      {lista.map((titulo, index) => {
        return <ListaItem key={index} titulo={titulo} />;
      })}
    </ul>
  );
}

export default Listagem;
