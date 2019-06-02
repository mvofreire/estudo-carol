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

  render() {
    return (
      <div className="App">
        <Formulario onAddTodo={this.addTodo} />
        <Listagem lista={this.state.lista} />
      </div>
    );
  }
}

export default App;
