import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../hooks/useUsuario";

export const UsuarioContext = createContext<any>(null);

interface UsuarioProviderProps {
	children: ReactNode
}

export function UsuarioProvider({ children }: UsuarioProviderProps) {

	const navigate = useNavigate();

	const usuario = useUsuario();
	if (!usuario?.user) {
		//navigate("/")
	}
	return (
		<UsuarioContext.Provider value={usuario}>
			{children}
		</UsuarioContext.Provider>
	);
}