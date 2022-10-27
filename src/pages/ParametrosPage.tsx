import { VStack } from "@chakra-ui/react";
import { Parametros } from "../components/parametro/Parametros";
import { ParametroProvider } from "../context/ParametroContext";
import { DadosUsuariosVisualizacao } from "../context/UsuariosVisualizacaoContext";

export const ParametrosPage = () => {
	return (
		<VStack mt={10}>
			<ParametroProvider>
				<DadosUsuariosVisualizacao>
					{/* <ListaEventosColaborador /> */}
					<Parametros />
				</DadosUsuariosVisualizacao>
			</ParametroProvider>
		</VStack>
	);
}