import React from "react";
import { TesteUsuarioProvider } from "../context/TesteUsuariosContext";
import { Test } from './Teste';
export const TestePage = () => {
	return (
		<>
			<TesteUsuarioProvider>
				<Test />
			</TesteUsuarioProvider>
		</>
	);
}