import React, { Component } from "react";

class Formulario extends Component {
  state = {
    titulo: ""
  };
  input = null;

  componentDidMount() {
    this.input.focus();
  }

  onChangeText = e => {
    const { value } = e.target;
    this.setState({ titulo: value });
  };

  onClickButton = _ => {
    const { titulo } = this.state;
    const { onAddTodo } = this.props;

    if (onAddTodo && titulo != "") {
      onAddTodo(titulo);
    }

    this.setState({ titulo: "" });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={node => (this.input = node)}
          type="text"
          value={this.state.titulo}
          onChange={this.onChangeText}
        />
        <button onClick={this.onClickButton}>Adicionar</button>
      </div>
    );
  }
}

export default Formulario;
