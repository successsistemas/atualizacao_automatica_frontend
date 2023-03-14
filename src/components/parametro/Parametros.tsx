import {
	Button, Editable, EditableInput, EditablePreview, FormControl, FormLabel, HStack, Input, List, ListItem, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Skeleton, Spacer, Stack, Text, Textarea, toast, useDisclosure, useToast, VStack
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { configurarParametro } from "../../api/api";
import { ConfiguracaoParametroTDO } from "../../api/EventoPayloadTDO";
import { ParametroContext, ParametroProvider } from "../../context/ParametroContext";

export const Parametros = () => {

	const toast = useToast();
	const { parametro, mutate } = useContext(ParametroContext);
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [dias, setDias] = useState<number>(parametro?.data[0]?.em_dias | 0);
	const [loading, setLoading] = useState(false);

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)



	console.log(parametro?.data[0]?.em_dias)

	useEffect(() => {
		setDias(parametro?.data[0]?.em_dias);
	}, [parametro?.data])


	const data = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 10,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 30,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 10,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 50,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 97,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 87,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 99,
			amt: 2100,
		},
	];

	const salvar = () => {
		const payload: ConfiguracaoParametroTDO = {
			tempo_eliminacao_log: dias
		}
		setLoading(true)
		configurarParametro(payload).then((result) => {
			console.log("ok it works")
			setLoading(false)
			toast({
				title: "Configuração salva com sucesso",
				status: "success",
				duration: 2000,
				isClosable: true,
			})
		}).catch(error => {
			console.log("not of this is working here, because of none")
			toast({
				title: "Erro ao salvar configuração",
				status: "error",
				duration: 2000,
				isClosable: true,
			})
			setLoading(false)
		});
	}

	return (
		<>
			<VStack w={"full"}>
				<HStack w="full" >

				</HStack>
				<VStack overflowY={"auto"} p={2} bgColor={"white"} borderRadius={5} minH={400} w={"full"}>
					<VStack py={8} alignItems={"start"} w="full">
						<Text fontWeight={"semibold"} fontSize={"lg"}>Configuração de parâmetros</Text>
						<HStack w={"full"}>
							<Text fontSize={"medium"} color={"gray.400"}>Adicione e remova funcionalidades.</Text>
							<Spacer />
							<Button variant={"ghost"} onClick={salvar} colorScheme={"blue"}>Salvar</Button>
						</HStack>
					</VStack>
					<></>
					<VStack alignItems={"start"} w={"full"}>
						<List>
							{!loading ?
								<ListItem >
									<Text fontSize={"medium"} color={"gray.400"}>Configuração de Logs</Text>
									<HStack spacing={4} py={4} px={2} className="listSetting" cursor={"pointer"} onClick={() => { }}>
										<VStack color={"gray.300"}><AiFillSetting size={"24px"} /></VStack>
										<Text fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"}>
											Tempo para eliminação de registros de Log em dias
										</Text>
										<Spacer />
										<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} defaultValue={dias ? dias.toString() : (0).toString()} value={dias ? dias.toString() : (0).toString()} onChange={(e) => { setDias(Number(e)) }} onBlur={() => { console.log("saiu do foco") }}>
											<EditablePreview />
											<EditableInput />
										</Editable>
									</HStack>
									<HStack spacing={4} py={4} px={2} className="listSetting" cursor={"pointer"} onClick={() => { }}>
										<VStack color={"gray.300"}><AiFillSetting size={"24px"} /></VStack>
										<Text fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"}>
										Tempo para eliminação de Pendências de Conciliação
										</Text>
										<Spacer />
										<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} defaultValue={dias ? dias.toString() : (0).toString()} value={dias ? dias.toString() : (0).toString()} onChange={(e) => { setDias(Number(e)) }} onBlur={() => { console.log("saiu do foco") }}>
											<EditablePreview />
											<EditableInput />
										</Editable>
									</HStack>
									<HStack spacing={4} py={4} px={2} className="listSetting" cursor={"pointer"} onClick={() => { }}>
										<VStack color={"gray.300"}><AiFillSetting size={"24px"} /></VStack>
										<Text fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"}>
										Tempo para eliminar Rejeições Fiscais
										</Text>
										<Spacer />
										<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} defaultValue={dias ? dias.toString() : (0).toString()} value={dias ? dias.toString() : (0).toString()} onChange={(e) => { setDias(Number(e)) }} onBlur={() => { console.log("saiu do foco") }}>
											<EditablePreview />
											<EditableInput />
										</Editable>
									</HStack>
								</ListItem>
								:
								<VStack w={"400px"} h={"80px"}>
									<Skeleton w={"full"}>
										<VStack w={"full"}></VStack>
										<div>contents wrapped</div>
										<div>won't be visible</div>
									</Skeleton>
								</VStack>}
							{/* <ListItem>
								<Text fontSize={"medium"} color={"gray.400"}>Configuração conciliação</Text>
								<HStack spacing={4} py={4} px={2} className="listSetting" cursor={"pointer"} onClick={() => { }}>
									<VStack color={"gray.300"}><AiFillSetting size={"24px"} /></VStack>
									<Text fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"}>
										Tempo para eliminação de Pendências de Conciliação
									</Text>
									<Spacer />
									<Text fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"}>
										12
									</Text>
								</HStack>
							</ListItem>
							<ListItem>
								<Text fontSize={"medium"} color={"gray.400"}>Configuração Reijeções Fiscais</Text>
								<HStack spacing={4} py={4} px={2} className="listSetting" cursor={"pointer"} onClick={() => { }}>
									<VStack color={"gray.300"}><AiFillSetting size={"24px"} /></VStack>
									<Text fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"}>
										Tempo para eliminar Rejeições Fiscais
									</Text>
									<Spacer />
									<Text fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"}>
										12
									</Text>
								</HStack>
							</ListItem> */}
						</List>
					</VStack>
				</VStack>

			</VStack>
			<Modal

				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Criar versão de produção</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6} >
						<VStack overflow={"auto"} maxH={300}>
							<FormControl>
								<FormLabel>Título</FormLabel>
								<Input ref={initialRef} placeholder='Versão x-yz' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Versão</FormLabel>
								<Input placeholder='Last name' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Descrição</FormLabel>
								<Input placeholder='Last name' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Nome do arquivo</FormLabel>
								<Input placeholder='Last name' />
							</FormControl>
							<FormControl>
								<FormLabel>Descrição</FormLabel>
								<Textarea
									placeholder='Descreva a versão'
									size='sm'
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Por favor, digite "eu confirmo que desejo lançar essa versão"</FormLabel>
								<Input placeholder='' />
							</FormControl>


						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3}>
							Lançar
						</Button>
						<Button onClick={onClose}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);

}