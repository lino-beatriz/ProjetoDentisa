import React, { Component } from 'react';

class FormularioDentista extends Component {

    // O estado de um objeto sempre fica dentro do construtor do objeto (quando o estado mudar ao criar o objeto)
    constructor(props) {
        super(props)

        this.stateInicial = {
            codigo: '',
            nome: '',
            cro: '',
            telefone: '',
            email: ''
        }

        this.state = this.stateInicial
    }

    inputHandler = (event) => {
        console.log(event.target.name)

        // name e value sao atibutos existentes no target para pegar o nome e o valor de um input
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    enviarDados = () => {
        console.log(this.state)
        this.props.enviarDados(this.state)
        this.setState(this.stateInicial)
    }

    render() {

        const { codigo, nome, cro, telefone, email } = this.state;

        return (
            <div className="card">
                <div className="card-header">
                    <h5>Cadastro de dentistas</h5>
                </div>

                <div className="card-body">
                    <div className="form-group">
                        <form>
                            <label htmlFor="codigo">Codigo: </label>
                            <input type="text" className="form-control" id="codigo" name="codigo" value={codigo} onChange={this.inputHandler} />

                            <label htmlFor="nome">Nome: </label>
                            <input type="text" className="form-control" id="nome" name="nome" value={nome} onChange={this.inputHandler} />

                            <label htmlFor="cro">CRO: </label>
                            <input type="text" className="form-control" id="cro" name="cro" value={cro} onChange={this.inputHandler} />

                            <label htmlFor="telefone">Telefone: </label>
                            <input type="text" className="form-control" id="telefone" name="telefone" value={telefone} onChange={this.inputHandler} />

                            <label htmlFor="email">Email: </label>
                            <input type="text" className="form-control" id="email" name="email" value={email} onChange={this.inputHandler} />

                            <button className="btn btn-outline-info form-control mt-2" type="button" onClick={this.enviarDados}>GRAVAR</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioDentista;