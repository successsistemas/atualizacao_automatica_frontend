import { HStack, VStack, Text, Spacer, Button, useDisclosure, FormControl, FormLabel, Input, Textarea, Center, EditablePreview, EditableInput, Editable, EditableTextarea, useToast } from "@chakra-ui/react";
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
import { useNavigate, useParams } from "react-router-dom";
import { Versao, VersaoJSON, VersaoUpdate } from "./type";
import { deleteSingleVersion, getSingleVersion, updateSingleVersion } from "../../api/api";
import { AxiosError, AxiosResponse } from "axios";
import { ConsoleErro } from "../errolog/ConsoleErro";
import { useDetalheVersao } from "../../hooks/useDetalheVersao";
import { stringToDate, stringToDateWithHour } from "../../util/util";

export const DetalheVersao = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const toast = useToast();

	const [fileNames, setFileNames] = useState<string[]>();
	const [titulo, setTitulo] = useState('');
	const [versao, setVersao] = useState('');
	const [descricao, setDescricao] = useState('');
	const [nomeArquivo, setNomeArquivo] = useState('0');
	const [codigo, setCodigo] = useState('');
	const [status, setStatus] = useState(0);
	const [criadoEm, setCriadoEm] = useState('');
	const [tempoMedio, setTempoMedio] = useState(0);
	const [statusExecucao, setStatusExecucao] = useState(0);
	const [idVersao, setIdVersao] = useState('');
	const [confirmacao, setConfirmacao] = useState('');
	const [version, setVersion] = useState<VersaoJSON>();

	const [loading, setLoading] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);

	const navigate = useNavigate();

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const { id } = useParams();
	const { dados, error, mutate } = useDetalheVersao((id ?? '')?.toString());
	type Response = {
		data: any,
		error: any
	}
	useEffect(() => {
		try {
			const dadosVersao: VersaoJSON = dados?.data[0];
			setVersao(dadosVersao?.versao)
			setCodigo(dadosVersao?.codigo)
			setNomeArquivo(dadosVersao?.nome_arquivo)
			setDescricao(dadosVersao?.descricao)
			setCriadoEm(dadosVersao?.data_criacao_registro);
			setTempoMedio(dadosVersao?.tempo_medio_atualizacao);
			setStatusExecucao(dadosVersao?.status_execucao);
			setStatus(dadosVersao?.status);
			setIdVersao(dadosVersao?.id);
		} catch (e) {
console.log(e)
		}


	}, [dados])

	function deletarVersao() {
		setDeleteLoading(true)
		deleteSingleVersion(Number(id)).then((result) => {
			setDeleteLoading(false)
			const isError = result?.data === null;
			if (isError) {
				toast({
					title: "Ocorreu um erro",
					status: "error",
					duration: 2000,
					isClosable: true,
				})
			} else {
				toast({
					title: "Atualizado com successo",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
				navigate('/painel/colaborador/versoes')
			}
		})
	}

	function salvarVersao() {
		setLoading(true)
		const versaoModel: VersaoUpdate = {
			versao: versao,
			descricao: descricao,
			nome_arquivo: nomeArquivo,
			codigo: codigo,
			id: idVersao,
			status: status
		}
		updateSingleVersion(Number(idVersao), versaoModel).then((result) => {
			setLoading(false)
			const isError = result?.data === null;
			if (isError) {
				toast({
					title: "Ocorreu um erro",
					status: "error",
					duration: 2000,
					isClosable: true,
				})
			} else {
				toast({
					title: "Atualizado com successo",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
			}
		})
	}

	const columns = [
		{
			title: 'Versão',
			dataIndex: 'versao',
			key: 'versao',
		},
		{
			title: 'Código',
			dataIndex: 'codigo',
			key: 'codigo',
		},
		{
			title: 'Lançamento',
			dataIndex: 'data_lancamento',
			key: 'data_lancamento',
		},
		{
			title: 'Arquivo',
			dataIndex: 'nome_arquivo',
			key: 'nome_arquivo',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
		}
	];



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
			<VStack w={"full"}>
				<HStack spacing={5} w="full" >

				</HStack>
				<VStack bgColor={"white"} borderRadius={5} h={400} w={"full"}>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<HStack w="full">
							<Text fontWeight={"semibold"} fontSize={"lg"}>Detalhe de versão</Text>
							<Spacer />
							<Button isLoading={loading} onClick={salvarVersao} colorScheme={"blue"} variant={"ghost"}>Salvar</Button>
							<Button isLoading={deleteLoading} onClick={deletarVersao} colorScheme={"gray"}><AiFillDelete fill="gray" /></Button>
						</HStack>

						<ResumoVersao setStatus={setStatus} status={Number(status)} />
					</VStack>
					<TableContainer fontSize={"lg"} w={"full"}>
						<Table variant='simple'>
							{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Versão</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Código</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Nome do arquivo</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Criado em</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Tempo médio</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Status exc.</Text></Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr className="itemLog" cursor={"pointer"}>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} value={versao} onChange={(e) => { setVersao(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} value={codigo} onChange={(e) => { setCodigo(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} value={nomeArquivo} onChange={(e) => { setNomeArquivo(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>

									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} value={stringToDateWithHour(criadoEm)} onChange={(e) => { setCriadoEm(e) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} value={(tempoMedio ?? 0).toString() + ' Min'} onChange={(e) => { setTempoMedio(Number(e)) }} onBlur={() => { console.log("saiu do foco") }}>
												<EditablePreview />
												<EditableInput />
											</Editable>
										</Center>
									</Td>
									<Td>
										<Center >
											<Editable w={"100px"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} value={(statusExecucao ?? 0) === 0 ? "Automático" : "Manual"} onChange={(e) => { setStatusExecucao(Number(e)) }} onBlur={() => { console.log("saiu do foco") }}>
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
						<Editable w={"full"} fontSize={"lg"} color={"gray.600"} fontWeight={"semibold"} value={descricao} onChange={(e) => { setDescricao(e) }} onBlur={() => { console.log("saiu do foco") }}>
							<EditablePreview />
							<EditableTextarea />
						</Editable>

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

							<FormControl color={"black"} mt={4}>
								<FormLabel >Por favor, digite "eu confirmo que desejo lançar essa versão"</FormLabel>
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