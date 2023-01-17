import { VStack } from "@chakra-ui/react";
import { ControleProcessoContrato } from "../components/controle_processo_contrato/ControleProcessoContrato";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const ControleProcessoContratoPage = () => {
	return (
		<VStack mt={10}>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					{/* <ListaEventosColaborador /> */}
					<ControleProcessoContrato />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}