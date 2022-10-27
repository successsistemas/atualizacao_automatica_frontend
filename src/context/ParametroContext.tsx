import { createContext, ReactNode } from "react";
import { useParametro } from "../hooks/useParametro";

export const ParametroContext = createContext<any>(null);

interface ParametroProviderProps {
	children: ReactNode
}

export function ParametroProvider({ children }: ParametroProviderProps) {

	const data = useParametro();

	return (
		<ParametroContext.Provider value={data}>
			{children}
		</ParametroContext.Provider>
	);
}