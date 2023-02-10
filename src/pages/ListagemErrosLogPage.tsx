import { VStack } from "@chakra-ui/react";
import { ErrosLog } from "../components/estatistica/ErrosLog";
import { Estatistica } from "../components/estatistica/Estatistica";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const ListagemErroLogPage = () => {
	return (
		<VStack>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					<ErrosLog />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}