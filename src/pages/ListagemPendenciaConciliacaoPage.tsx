import { VStack } from "@chakra-ui/react";
import { PendenciaConciliacao } from "../components/estatistica/PendenciaConciliacao";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const ListagemPendenciaConciliacaoPage = () => {
	return (
		<VStack>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					<PendenciaConciliacao />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}