import { createContext, ReactNode } from "react";
import { useEvents } from "../hooks/useEventos";

export const EventosContext = createContext<any>(null);

interface EventosProviderProps {
	children: ReactNode
}

export function EventosProvider({ children }: EventosProviderProps) {

	const eventos = useEvents();

	return (
		<EventosContext.Provider value={eventos}>
			{children}
		</EventosContext.Provider>
	);
}