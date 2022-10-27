import { VStack } from "@chakra-ui/react";
import { ControleProcessoContrato } from "../components/controle_processo_contrato/ControleProcessoContrato";
import { ControleProcessoContratoDetalhes } from "../components/controle_processo_contrato/ControleProcessoContratoDetalhes";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const ControleProcessoContratoDetalhesPage = () => {
	return (
		<VStack mt={10}>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					{/* <ListaEventosColaborador /> */}
					<ControleProcessoContratoDetalhes />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}