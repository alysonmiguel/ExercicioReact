import React from "react";
import Turma from "./Turma";

function App() {
	return (
		<div>
			<Turma
				info={{ Prof: "Taniro", Disciplina: "Autoria", Horario: "2m23" }}
			/>
			<Turma
				info={{ Prof: "Taniro", Disciplina: "Autoria", Horario: "2m23" }}
			/>
			<Turma
				info={{ Prof: "Taniro", Disciplina: "Autoria", Horario: "2m23" }}
			/>
		</div>
	);
}

export default App;
