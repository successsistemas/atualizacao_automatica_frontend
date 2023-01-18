import {
	Badge,
	Button, Center, Editable, EditableInput, EditablePreview, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, toast, Tr, useDisclosure, useToast, VStack
} from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DoubleLeft from "../../images/double-left-arrow.png";
import DoubleRigth from "../../images/double-rigth-arrow.png";

import { useNavigate } from "react-router-dom";
import { criarVersao, getFilesName, getVersoes } from "../../api/api";
import { Versao } from "./type";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import { stringToDate } from "../../util/util";


export type DataType = {
	id: number;
	versao: string;
	codigo: string;
	data_lancamento: string;
	nome_arquivo: string;
	descricao: string;
	status: number;
	atualizado_em: string;
}
export const Versoes = () => {

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false)

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [fileNames, setFileNames] = useState<string[]>();
	//const [statusExecList, setStatusExecList] = useState<string[]>(['Automáti']);
	const [titulo, setTitulo] = useState('');
	const [versao, setVersao] = useState('');
	const [descricao, setDescricao] = useState('');
	const [nomeArquivo, setNomeArquivo] = useState('0');
	const [statusExecucao, setStatusExecucao] = useState('0');
	const [codigo, setCodigo] = useState('');
	const [todosCamposPreenchidos, setTodosCamposPreenchidos] = useState(false)
	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const [versoes, setVersoes] = useState<Versao[]>();
	const [tempoMedioAtualizacao, setTempoMedioAtualizacao] = useState(0);

	const [limite, setLimite] = useState(5);
	const [currentPosition, setPosition] = useState<number>(1);
	const [totalItens, setTotalItens] = useState(0);

	const toast = useToast();


	const abrirLink = (data: DataType) => {
		const obj = data;
		console.log(obj)
		navigate((obj?.id).toString())
	}

	useEffect(() => {
		getFilesName().then(result => {
			setFileNames(result?.data)
		})
		getVersoes(currentPosition, limite).then((result) => {
			setVersoes(result?.data?.versoes)
			setTotalItens(result?.data?.total)
		})
	}, [currentPosition, limite, loading])


	const columns: ColumnsType<Versao> = [
		{
			title: 'Versão',
			dataIndex: 'versao',
			key: 'versao'
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
			render: (data: string) => {
				return stringToDate(data);
			}
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
			render: (status: number) => {
				const online = status === 1 ? true : false;;
				return <Tag style={{ width: "70px", textAlign: "center" }} color={online ? "green" : "orange"}>{online ? "Liberado" : "Bloqueado"}</Tag>
			},
		},
		{
			title: 'Ação',
			dataIndex: 'acao',
			key: 'acao',
			render: (_, record: any) => {
				const dataType: DataType = record;
				return <a onClick={() => {
					abrirLink(record)
				}}>Editar</a>
			},
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

	const next = (numero: number) => {
		setPosition(currentPosition + (numero))
	}

	function validarCampos() {
		setLoading(true)
		if (!(!versao || !nomeArquivo || !descricao || !codigo)) {
			criarVersao({ codigo: codigo, descricao: descricao, nome_arquivo: nomeArquivo, versao: versao, data_lancamento: "null", id: "null", status_execucao: Number(statusExecucao), tempo_medio_atualizacao:Number(tempoMedioAtualizacao)}).then((result) => {
				setLoading(false)
				limpar()
			}).catch((error) => {
				setLoading(false)
				toast({
					title: "Ocorreu um erro",
					status: "error",
					duration: 2000,
					isClosable: true,
				})
			});

		} else {
			setLoading(false)
			toast({
				title: "Por favor, preencha todos os campos.",
				status: "warning",
				duration: 2000,
				isClosable: true,
			})

		}
	}
	function limpar() {
		setVersao('')
		setCodigo('')
		setNomeArquivo('')
		setDescricao('')
		setTempoMedioAtualizacao(0)
		onClose();
		toast({
			title: "Versão criada com sucesso!",
			status: "success",
			duration: 2000,
			isClosable: true,
		})
	}
	return (
		<>
			<VStack w={"full"}>
				<HStack w="full" >
				</HStack>
				<VStack bgColor={"white"} borderRadius={5} w={"full"} >
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<Text fontWeight={"semibold"} fontSize={"lg"}>Produção</Text>

						<HStack w={"full"}>

							<Text fontSize={"md"} color={"gray.400"}>Crie e gerencie versões de produção para disponibilizar para todos os usuários.</Text>
							<Spacer />
							<Button onClick={onOpen} colorScheme={"blue"}>Criar nova versão</Button>
						</HStack>
					</VStack>
					<Table size="large" pagination={false} style={{ width: "100%" }} dataSource={versoes} columns={columns} />;
					<VStack py={5} w={"full"}>
						<HStack>
							{currentPosition >= 1}
							<Button disabled={currentPosition <= 1} onClick={() => { next(-1) }}><Image boxSize={"14px"} src={DoubleLeft} /></Button>
							<Text fontWeight={500}>{currentPosition} de {Math.ceil(totalItens / limite)}</Text>
							<Button disabled={currentPosition >= Math.ceil(totalItens / limite)} onClick={() => { next(1) }}><Image boxSize={"14px"} src={DoubleRigth} /></Button>
						</HStack>
					</VStack>
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
							<FormControl mt={4}>
								<FormLabel>Versão</FormLabel>
								<Input value={versao} onChange={(e) => { setVersao(e.target.value); }} placeholder='ex: x' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Código</FormLabel>
								<Input value={codigo} onChange={(e) => { setCodigo(e.target.value); }} placeholder='ex: 2' />
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Tempo médio atualização em minutos</FormLabel>
								<Input type={"number"} value={tempoMedioAtualizacao} onChange={(e) => { setTempoMedioAtualizacao(Number(e.target.value)); }} placeholder='ex: 2' />
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Status de execução</FormLabel>
								<Select  defaultValue={statusExecucao} onChange={(e) => { setStatusExecucao(e.target.value); }} fontSize={"large"} >
									<option value={0}>{"Automático"}</option>
									<option value={1}>{"Manual"}</option>
								</Select>
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Nome do arquivo</FormLabel>
								<Select placeholder="Selecione um arquivo" defaultValue={nomeArquivo} onChange={(e) => { setNomeArquivo(fileNames ? fileNames[Number(e.target.value)]: "erroNoNome"); }} fontSize={"large"} >
									{fileNames?.map((fileName, index) => {
										return (
											<option value={index}>{fileName}</option>
										);
									})}
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Descrição</FormLabel>
								<Textarea
									value={descricao} onChange={(e) => { setDescricao(e.target.value); }}
									placeholder='Descreva a versão'
									size='sm'
								/>
							</FormControl>



						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button isLoading={loading} colorScheme='blue' mr={3} onClick={validarCampos}>
							Lançar
						</Button>
						<Button onClick={onClose}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}