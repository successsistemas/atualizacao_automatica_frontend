import { VStack } from "@chakra-ui/react";
import { Estatistica } from "../components/estatistica/Estatistica";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const ListagemEventosColaboradorPage = () => {
	return (
		<VStack>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					<Estatistica />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}