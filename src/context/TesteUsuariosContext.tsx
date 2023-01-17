import React, { createContext, ReactNode } from "react";
import { useTesteUsuarios } from "../hooks/useTesteUsuarios";
export const TesteUsuariosContext = createContext<any>(null);

interface TesteUsuariosProviderProps {
	children: ReactNode
}

export function TesteUsuarioProvider({ children }: TesteUsuariosProviderProps) {

	const data = useTesteUsuarios();
	//console.log(data)

	return (
		<TesteUsuariosContext.Provider value={data}>
			{children}
		</TesteUsuariosContext.Provider>
	);
}