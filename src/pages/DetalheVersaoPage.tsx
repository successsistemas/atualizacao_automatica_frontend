import { VStack } from "@chakra-ui/react";
import { DetalheVersao } from "../components/versoes/DetalheVersao";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const DetalheVersaoPage = () => {
	return (
		<VStack>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					{/* <ListaEventosColaborador /> */}
					<DetalheVersao />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}