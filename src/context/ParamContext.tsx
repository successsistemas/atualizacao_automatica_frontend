import { createContext, ReactNode } from "react";
import { useEvento } from "../hooks/useEvento";
export const ParamContext = createContext<any>(null);

interface ParamProviderProps {
	children: ReactNode
}

export function ParamProvider({ children }: ParamProviderProps) {
	const data = useEvento();

	return (
		<ParamContext.Provider value={data}>
			{children}
		</ParamContext.Provider>
	);
}