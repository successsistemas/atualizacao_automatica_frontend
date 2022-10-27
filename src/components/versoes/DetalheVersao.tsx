import { HStack, VStack, Text, Spacer, Button, useDisclosure, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react'
import React from "react";
import { ResumoVersao } from "./ResumoVersao";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";

export const DetalheVersao = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()



	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const { id } = useParams();
	console.log("LLLLLLLLLLLLLLLLLLLL", id)

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
				<VStack bgColor={"white"} borderRadius={5} h={400} w={"full"} style={{ WebkitBoxShadow: "0px 0px 12px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<HStack w="full">
							<Text fontWeight={"semibold"} fontSize={"lg"}>Detalhe de versão</Text>
							<Spacer />
							<Button colorScheme={"gray"}><AiFillDelete fill="gray" /></Button>
						</HStack>

						<ResumoVersao />
					</VStack>
					<TableContainer fontSize={"lg"} w={"full"}>
						<Table variant='simple'>
							{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Versão</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Código</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Nome do arquivo</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Total erros</Text></Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr className="itemLog" cursor={"pointer"}>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>1.3</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>4f</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>nome_doarquivo.tsz.zip</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>5</Text></Td>
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