import {
	Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Table, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure, VStack
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { CheckBoxControleProcesso } from "./CheckBoxControleProcesso";

export const ControleProcessoContratoDetalhes = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)


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

	return (
		<>
			<VStack w={"80%"}>
				<HStack spacing={5} w="full" >

				</HStack>
				<VStack bgColor={"white"} borderRadius={5} w={"full"} style={{ WebkitBoxShadow: "0px 0px 12px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<HStack w="full">
							<Text fontWeight={"semibold"} fontSize={"lg"}>Controle de processo</Text>
						</HStack>

						<CheckBoxControleProcesso />
					</VStack>
					<TableContainer fontSize={"lg"} w={"full"}>
						<Table variant='simple'>
							{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Contrato</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Razão social</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Praça</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Versão em uso</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Última atualização</Text></Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr className="itemLog" cursor={"pointer"}>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>000873</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Salgados Mineiro</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Matriz</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>1.4</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>12 de Set. 2022</Text></Td>
								</Tr>
							</Tbody>
							<Tfoot>

							</Tfoot>
						</Table>
					</TableContainer>
					<TableContainer pt={5} fontSize={"lg"} w={"full"}>
						<Table variant='simple'>
							{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Último download</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Último erro de log</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Última Conciliação</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Última rejeição</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Última mensagem</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Último envio boletos</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Última cobrança</Text></Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr className="itemLog" cursor={"pointer"}>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>15 Set. 2022</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>10 Jan. 2021</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>05 Mar. 2019</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>15 Ago. 2021</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>01 Fev. 2021</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>15 Ago. 2021</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>01 Fev. 2021</Text></Td>
								</Tr>
							</Tbody>
							<Tfoot>

							</Tfoot>
						</Table>
					</TableContainer>
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