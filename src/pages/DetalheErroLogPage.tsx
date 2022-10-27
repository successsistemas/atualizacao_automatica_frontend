import { VStack } from "@chakra-ui/react";
import { DetalheErroLog } from "../components/errolog/DetalheErroLog";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const DetalheErroLogPage = () => {
	return (
		<VStack mt={10}>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					{/* <ListaEventosColaborador /> */}
					<DetalheErroLog />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}