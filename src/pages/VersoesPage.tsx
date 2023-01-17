import { VStack } from "@chakra-ui/react";
import { Versoes } from "../components/versoes/Versoes";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const VersoesPage = () => {
	return (
		<VStack>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					<Versoes />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}