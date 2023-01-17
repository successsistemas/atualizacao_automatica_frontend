import { EventoProvider } from "../context/EventoContext";
import { ParamProvider } from "../context/ParamContext";
import { DetalheEventoCliente } from "./DetalheEventoCliente";

export const DetalheEventoPage = () => {
	return (
		<ParamProvider>
			<EventoProvider>
				<DetalheEventoCliente />
			</EventoProvider>
		</ParamProvider>
	);
}