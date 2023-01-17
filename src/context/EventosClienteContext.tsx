import { createContext, ReactNode } from "react";
import { useClienteEvents } from "../hooks/useClienteEventos";

export const EventosClienteContext = createContext<any>(null);

interface EventosClienteProviderProps {
	children: ReactNode
}

export function EventosClienteProvider({ children }: EventosClienteProviderProps) {

	const eventos = useClienteEvents();

	return (
		<EventosClienteContext.Provider value={eventos}>
			{children}
		</EventosClienteContext.Provider>
	);
}