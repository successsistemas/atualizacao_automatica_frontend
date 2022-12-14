import {
	Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure, VStack
} from "@chakra-ui/react";
import React from "react";
import { Badge } from '@chakra-ui/react'
import { DatePicker, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

export const GerenciamentoAtualizacaoCliente = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const navigate = useNavigate();

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
				<VStack overflow={"auto"} bgColor={"white"} borderRadius={5} h={400} w={"full"} style={{ WebkitBoxShadow: "0px 0px 12px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<Text fontWeight={"semibold"} fontSize={"lg"}>Controle de atualização</Text>

						<HStack w={"full"} pt={5}>
							<Select value={1} size={"md"} fontSize={"md"} color={"gray.600"} fontWeight={"semibold"} w={"200px"}>
								<option value='option1'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Contrato</Text></option>
								<option value='option2'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Empresa</Text></option>

							</Select>
							<Input type={'text'} onChange={(e: any) => { }} size={"md"} variant={"filled"} placeholder={"texto aqui.."} />
							<Select value={1} size={"md"} fontSize={"md"} color={"gray.600"} fontWeight={"semibold"} w={"200px"}>
								<option value='Manual'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Manual</Text></option>
								<option value='Automático'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Automático</Text></option>

							</Select>
							<RangePicker style={{ height: "40px", borderRadius: "5px" }} />
							<Button size={"md"} mx={10} onClick={onOpen} colorScheme={"blue"}>Buscar</Button>
						</HStack>
					</VStack>
					<TableContainer fontSize={"lg"} w={"full"}>
						<Table variant='simple'>
							{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Contrato</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Atualização</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Máquina</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Versão</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Execução</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Agendamento</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Atualizado</Text></Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr className="itemLog" cursor={"pointer"}>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>000873</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>13 Jan. 2024</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>LENOVO-96</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>1.4</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Manual</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Amanhã</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}> <Badge colorScheme='green'>Sim</Badge></Text></Td>

								</Tr>

								<Tr className="itemLog" cursor={"pointer"}>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>000873</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>13 Jan. 2024</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>LENOVO-96</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>1.4</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Manual</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Amanhã</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}> <Badge colorScheme='yellow'>Não</Badge></Text></Td>

								</Tr>


							</Tbody>
							<Tfoot>

							</Tfoot>
						</Table>
					</TableContainer>
				</VStack>
			</VStack>
			<Modal
				size={"lg"}
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