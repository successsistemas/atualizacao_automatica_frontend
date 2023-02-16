import { Button, Center, HStack, Input, InputGroup, InputRightElement, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiArrowBack, BiSave } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getConfiguracaoBancoDados, salvarConfiguracaoBancoDados } from "../api/api_bd";
import { ConfiguracaoTDO } from "../types/types";
export const ConfiguracaoConexao = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [buttonLoading, setButtonIsLoading] = useState(false);
	const [config, setConfig] = useState<ConfiguracaoTDO>();
	const [host, setHost] = useState<string>('');
	const [usuario, setUsuario] = useState<string>('');
	const [banco, setBanco] = useState<string>('');
	const [porta, setPorta] = useState<string>('');
	const [senha, setSenha] = useState<string>('');
	const navigate = useNavigate();
	const toast = useToast();

	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	function salvar() {
		setButtonIsLoading(true);
		salvarConfiguracaoBancoDados({
			host: host,
			port: porta,
			senha: senha,
			usuario: usuario,
			banco: banco
		}).then((result) => {
			if (Number(result?.data?.statusCode) === 201)  {
				setButtonIsLoading(false);
				toast({
					title: "Dados salvos com sucesso!",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
			}
		})
	}

	useEffect(() => {
		setIsLoading(true)
		getConfiguracaoBancoDados().then((result) => {
			setConfig(result?.data)
			setHost(config?.host ?? '')
			setUsuario(config?.usuario ?? '')
			setPorta(config?.port ?? '')
			setSenha(config?.senha ?? '')
			setBanco(config?.banco ?? '')
			setIsLoading(false)
		});
	}, [config?.host, config?.port, config?.senha, config?.usuario])

	return (
		<VStack h={"100vh"} w={"full"} px={20} py={5} >
			<Center h={"100vh"} borderRadius={5} >
				<VStack m={4}>
					{isLoading && <HStack>
						<Spinner size='xs' />
						<Text size="lg">Carregando...</Text>
					</HStack>}
					<Input value={host} onChange={(e) => { setHost(e.target?.value) }} size={"lg"} variant={"filled"} placeholder={"Host"} />
					<Input value={usuario} onChange={(e) => { setUsuario(e.target?.value) }} size={"lg"} variant={"filled"} placeholder={"Usuario"} />
					<Input value={banco} onChange={(e) => { setBanco(e.target?.value) }} size={"lg"} variant={"filled"} placeholder={"Banco"} />
					<Input value={porta} onChange={(e) => { setPorta(e.target?.value) }} size={"lg"} variant={"filled"} placeholder={"Porta"} />
					<InputGroup size='md'>
						<Input
							value={senha}
							onChange={(e) => { setSenha(e.target?.value) }}
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
					<Button onClick={salvar} isLoading={buttonLoading} size={"lg"} leftIcon={<BiSave />} w="full" colorScheme={"telegram"} >Salvar</Button>
					<Button onClick={() => { navigate('/') }} variant={"ghost"} size={"lg"} leftIcon={<BiArrowBack />} w="full" colorScheme={"telegram"}>Voltar</Button>
				</VStack>
			</Center>
		</VStack>
	);
}

