import React, { Component } from "react";
import "./App.css";

import Formulario from "./Formulario";
import Listagem from "./Listagem";

class App extends Component {
  state = {
    lista: []
  };

  addTodo = titulo => {
    this.setState({
      lista: [...this.state.lista, titulo]
    });
  };

  remover = index => {
    const { lista } = this.state;
    lista.splice(index, 1);
    this.setState({ lista });
  };
  render() {
    return (
      <div className="App">
        <Formulario onAddTodo={this.addTodo} />
        <Listagem lista={this.state.lista} onClickRemove={this.remover} />
      </div>
    );
  }
}

export default App;
