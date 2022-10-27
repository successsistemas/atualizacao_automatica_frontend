import { createContext, ReactNode } from "react";
import { useUsers } from "../hooks/useUsers";

export const UsuarioVisualizacaoContext = createContext<any>(null);

interface DadosUsuariosVisualizacaoProviderProps {
	children: ReactNode
}

export function DadosUsuariosVisualizacao({ children }: DadosUsuariosVisualizacaoProviderProps) {

	const dadosVisualizacao = useUsers();

	return (
		<UsuarioVisualizacaoContext.Provider value={dadosVisualizacao}>
			{children}
		</UsuarioVisualizacaoContext.Provider>
	);
}