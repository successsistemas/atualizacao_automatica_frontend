import { VStack } from "@chakra-ui/react";
import { PendenciaConciliacao } from "../components/estatistica/PendenciaConciliacao";
import { RejeicaoFiscal } from "../components/estatistica/RejeicaoFiscal";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const LIstaRejeicoesFiscaisPage = () => {
	return (
		<VStack>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					<RejeicaoFiscal />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}