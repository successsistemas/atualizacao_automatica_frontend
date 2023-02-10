import { VStack } from "@chakra-ui/react";
import { PrincipalPage as MainPage } from "../components/principal_page/PrincipalPage";
import { EventosProvider } from "../context/EventosContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const PrincipalPage = () => {
	return (
		<VStack>
			<EventosProvider>
				<DadosUsuariosVisualizacao>
					{/* <ListaEventosColaborador /> */}
					<MainPage />
				</DadosUsuariosVisualizacao>
			</EventosProvider>
		</VStack>
	);
}