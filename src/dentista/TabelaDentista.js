import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>CÓDIGO</th>
                <th>NOME</th>
                <th>TELEFONE</th>
                <th colSpan="2">AÇÕES</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const dentistas = props.dentistas.map((dentista) => {
        return (
            <tr key={dentista.codigo}>
                <td>{dentista.codigo}</td>
                <td>{dentista.nome}</td>
                <td>{dentista.telefone}</td>
                <td><button onClick={() => {props.consultarDentista(dentista.codigo)}} className="btn btn-outline-warning btn-sm"><i className="far fa-edit"></i></button></td>
                <td><button onClick={() => {if (window.confirm("Confirma a exclusão?")){props.excluirDentista(dentista.codigo)}}} className="btn btn-outline-danger btn-sm"><i className="fas fa-trash-alt"></i></button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {dentistas}
        </tbody>
    );
}

class TabelaDentista extends Component {
    render() {

        const { dentistas, excluirDentista, consultarDentista } = this.props;
        console.log(dentistas);

        return (
            <div className="card mb-4">
                <div className="card-header">
                    <h5>Lista de dentistas</h5>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <TableHead />
                        <TableBody dentistas={dentistas} excluirDentista={excluirDentista} consultarDentista={consultarDentista}/>
                    </table>
                </div>

            </div>

        );
    }
}

export default TabelaDentista;
