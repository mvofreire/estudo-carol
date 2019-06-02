import React from "react";

function ListaItem({ titulo, onClickRemove, index }) {
  return <li>{titulo} - <button onClick = {()=>onClickRemove(index)}>X</button></li>;
}

function Listagem({ lista, onClickRemove }) {
  return (
    <ul>
      {lista.map((titulo, index) => {
        return <ListaItem key={index} index={index} titulo={titulo} onClickRemove={onClickRemove} />;
      })}
    </ul>
  );
}

export default Listagem;
