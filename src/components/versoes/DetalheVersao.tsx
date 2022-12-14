import { HStack, VStack, Text, Spacer, Button, useDisclosure, FormControl, FormLabel, Input, Textarea, Center, EditablePreview, EditableInput, Editable } from "@chakra-ui/react";
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
import React, { useEffect, useState } from "react";
import { ResumoVersao } from "./ResumoVersao";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Versao, VersaoJSON } from "./type";
import { getSingleVersion } from "../../api/api";
import { AxiosError, AxiosResponse } from "axios";
import { ConsoleErro } from "../errolog/ConsoleErro";

export const DetalheVersao = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [fileNames, setFileNames] = useState<string[]>();
	const [titulo, setTitulo] = useState('');
	const [versao, setVersao] = useState('');
	const [descricao, setDescricao] = useState('');
	const [nomeArquivo, setNomeArquivo] = useState('0');
	const [codigo, setCodigo] = useState('');
	const [confirmacao, setConfirmacao] = useState('');

	const [version, setVersion] = useState<VersaoJSON>();

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const { id } = useParams();

	type Response = {
		data: any,
		error: any
	}
	useEffect(() => {
		getSingleVersion(12).then((result) => {

			if (result?.data) {
				setVersion(result?.data[0])
			}
		}).catch((e) => {
			console.warn("hello")
		});
	}, [])

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
							<Text fontWeight={"semibold"} fontSize={"lg"}>Detalhe de vers??o</Text>
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
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Vers??o</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>C??digo</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Nome do arquivo</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Total erros</Text></Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr className="itemLog" cursor={"pointer"}>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} defaultValue={version?.versao} value={version?.versao} onChange={(e) => { setVersao(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} defaultValue={version?.codigo} value={version?.codigo} onChange={(e) => { setCodigo(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} defaultValue={version?.nome_arquivo} value={version?.nome_arquivo} onChange={(e) => { setVersao(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} defaultValue={version?.codigo} value={version?.codigo} onChange={(e) => { setCodigo(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
								</Tr>
							</Tbody>
							<Tfoot>

							</Tfoot>
						</Table>
					</TableContainer>
					<VStack px={10} w={"full"}>
						<ConsoleErro stringColor="black" erro="Algum erro aqui" cor={"#F9E79F"} />
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
					<ModalHeader>Criar vers??o de produ????o</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6} >
						<VStack overflow={"auto"} maxH={300}>
							<FormControl>
								<FormLabel>T??tulo</FormLabel>
								<Input ref={initialRef} placeholder='Vers??o x-yz' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Vers??o</FormLabel>
								<Input placeholder='Last name' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Descri????o</FormLabel>
								<Input placeholder='Last name' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Nome do arquivo</FormLabel>
								<Input placeholder='Last name' />
							</FormControl>
							<FormControl>
								<FormLabel>Descri????o</FormLabel>
								<Textarea
									placeholder='Descreva a vers??o'
									size='sm'
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Por favor, digite "eu confirmo que desejo lan??ar essa vers??o"</FormLabel>
								<Input placeholder='' />
							</FormControl>


						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3}>
							Lan??ar
						</Button>
						<Button onClick={onClose}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}