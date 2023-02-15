import { Center, SimpleGrid, VStack, Image, Heading, Input, Button, Text, HStack, Spinner, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiLogInCircle, BiArrowBack, BiSave } from "react-icons/bi";
import { getConfiguracaoBancoDados } from "../api/api_bd";
import { ConfiguracaoTDO } from "../types/types";
export const ConfiguracaoConexao = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [config, setConfig] = useState<ConfiguracaoTDO>();
	const [host, setHost] = useState<string>();
	const [usuario, setUsuario] = useState<string>();
	const [porta, setPorta] = useState<string>();
	const [senha, setSenha] = useState<string>();

	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	useEffect(() => {
		setIsLoading(true)
		getConfiguracaoBancoDados().then((result) => {
			setConfig(result?.data)
			setHost(config?.host)
			setUsuario(config?.usuario)
			setPorta(config?.port)
			setSenha(config?.senha)
			setIsLoading(false)
		});
	}, [config])
	return (
		<VStack h={"100vh"} w={"full"} px={20} py={5} >
			<Center h={"100vh"} borderRadius={5} >
				<VStack m={4}>
					{isLoading && <HStack>
						<Spinner size='xs' />
						<Text size="lg">Carregando...</Text>
					</HStack>}
					<Input value={host} size={"lg"} variant={"filled"} placeholder={"Host"} />
					<Input value={usuario} size={"lg"} variant={"filled"} placeholder={"Usuario"} />
					<Input value={porta} size={"lg"} variant={"filled"} placeholder={"Porta"} />
					<InputGroup size='md'>
						<Input
						value={senha}
						variant={"filled"}
						size={"lg"}
							pr='4.5rem'
							type={show ? 'text' : 'password'}
							placeholder='Enter password'
						/>
						<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm' onClick={handleClick}>
								{show ? 'Hide' : 'Show'}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Button size={"lg"} leftIcon={<BiSave />} w="full" colorScheme={"telegram"} >Salvar</Button>
					<Button variant={"ghost"} size={"lg"} leftIcon={<BiArrowBack />} w="full" colorScheme={"telegram"}>Voltar</Button>
				</VStack>
			</Center>
		</VStack>
	);
}