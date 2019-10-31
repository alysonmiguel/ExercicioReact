import React from "react";

function Turma(props) {
	return (
		<div>
			<h1>{props.info.Prof}</h1>
			<h2>{props.info.Disciplina}</h2>
			<h3>{props.info.Horario}</h3>
		</div>
	);
}

export default Turma;
