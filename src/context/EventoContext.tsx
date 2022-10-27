import { createContext, ReactNode } from "react";
import { useEvento } from "../hooks/useEvento";

export const EventoContext = createContext<any>(null);

interface EventoProviderProps {
	children: ReactNode
}

export function EventoProvider({ children }: EventoProviderProps) {

	const data = useEvento();

	return (
		<EventoContext.Provider value={data}>
			{children}
		</EventoContext.Provider>
	);
}