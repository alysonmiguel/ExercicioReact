import React from "react";
import Turma from "./Turma";
import turmaData from "./TurmaData";

function NewApp() {
	const turmas = turmaData.map(it => <Turma info={it} key={it.id} />);

	return <div>{turmas}</div>;
}

export default NewApp;
