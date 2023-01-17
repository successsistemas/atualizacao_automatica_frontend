import { VStack } from "@chakra-ui/react";
import { EventosClienteProvider } from "../context/EventosClienteContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";
import { ListaEventosCliente } from "./ListaEventosCliente";

export const ListagemEventosClientePage = () => {
	return (
		<VStack mt={10}>
			<EventosClienteProvider>
				<DadosUsuariosVisualizacao>
					<ListaEventosCliente />
				</DadosUsuariosVisualizacao>
			</EventosClienteProvider>
		</VStack>
	);
}