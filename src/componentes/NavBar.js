import React from 'react';

function NavBar() {
	return (
		<nav className="navbar navbar-expand navbar-light bg-dark mb-4">
			<a className="navbar-brand text-white text-uppercase sm-9" href="/">Odonto</a>

			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link text-white" href="/"><i className="fas fa-home"></i>&nbsp;Home</a>
					</li>

					<li className="nav-item">
						<a className="nav-link text-white" href="/dentistas"><i className="fas fa-tooth"></i>&nbsp;Dentistas</a>
					</li>

					<li className="nav-item">
						<a className="nav-link text-white" href="/pacientes"><i className="fas fa-user-injured"></i>&nbsp;Pacientes</a>
					</li>

					<li className="nav-item">
						<a className="nav-link text-white" href="/consultas"><i className="far fa-calendar-plus"></i>&nbsp;Marcar consultas</a>
					</li>
				</ul>

				<form className="form-inline">
					<input className="form-control-sm mr-2" type="search" placeholder="Digite o que precisa" />
					<button className="btn btn-outline-light btn-sm" type="button">Buscar</button>
				</form>
			</div>
		</nav>
	)
}

export default NavBar;