import { VStack } from "@chakra-ui/react";
import { GerenciamentoAtualizacaoCliente } from "../components/gerenciamento_atualizacao_clientes/GerenciamentoAtualizacaoCliente";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const GerenciamentoAtualizacaoClientePage = () => {
	return (
		<VStack mt={10}>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					{/* <ListaEventosColaborador /> */}
					<GerenciamentoAtualizacaoCliente />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}