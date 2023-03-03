import {
	Button, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, Textarea, useDisclosure, VStack
} from "@chakra-ui/react";
import { ConfigProvider, DatePicker, Table, Tag } from 'antd';
import ptBR from "antd/es/locale/pt_BR";
import type { ColumnsType } from 'antd/es/table';
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGerenciamentoAtualizacoesClientesDados } from "../../api/api";
import { ControleAtualizacaoColumnName } from "../../enuns/enuns";
import DoubleLeft from "../../images/double-left-arrow.png";
import DoubleRigth from "../../images/double-rigth-arrow.png";
import { stringToDate, stringToDateWithHour } from "../../util/util";

interface DataType {
	id: string,
	contrato: string,
	codigo_versao: string,
	codigo_maquina: string,
	codigo_usuario_success: string,
	nome_usuario_success: string,
	data_atualizacao: string,
	data_agendada: string,
	status_atualizacao: number,
	status_execucao: number,
}


const { RangePicker } = DatePicker;

export const GerenciamentoAtualizacaoCliente = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [dataAgendada, setDataAgendada] = useState<moment.Moment | null>();
	const [dataAtualizado, setDataAtualizado] = useState<moment.Moment | null>();
	const [contrato, setContrato] = useState('');
	const [codigoVersao, setCodigoVersao] = useState('');
	const [statusExecucao, setStatusExecucao] = useState('');
	const [statusAtualizacao, setStatusAtualizacao] = useState('');

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const navigate = useNavigate();
	const [currentPosition, setPosition] = useState<number>(1);
	const [totalItens, setTotalItens] = useState(0);
	const [limite, setLimite] = useState(5);

	const [dados, setDados] = useState<DataType[]>([]);

	const teste = () => {
		console.warn(statusAtualizacao)
	}
	teste();


	const next = (numero: number) => {
		setPosition(currentPosition + (numero))
	}

	useEffect(() => {
		getGerenciamentoAtualizacoesClientesDados(
			currentPosition, limite, contrato, codigoVersao, Number(statusExecucao),
			dataAgendada?.format("DD-MM-YYYY") ?? "", dataAtualizado?.format("DD-MM-YYYY") ?? "", Number(statusAtualizacao)
		).then((result) => {
			setTotalItens(result?.data?.total)
			setDados(result?.data?.dados)
		})
	}, [codigoVersao, contrato, currentPosition, dataAgendada, dataAtualizado, limite, statusAtualizacao, statusExecucao])

	const handleFIlter = () => {
		setPosition(1)
	}

	const columns: ColumnsType<DataType> = [
		{
			title: 'Contrato',
			dataIndex: ControleAtualizacaoColumnName.contrato,
			key: ControleAtualizacaoColumnName.contrato,
		},
		{
			title: 'Código versão',
			dataIndex: ControleAtualizacaoColumnName.codigoVersao,
			key: ControleAtualizacaoColumnName.codigoVersao,
		},
		{
			title: 'Código máquina',
			dataIndex: ControleAtualizacaoColumnName.codigoMaquina,
			key: ControleAtualizacaoColumnName.codigoMaquina,
		},
		{
			title: 'Código Usuário',
			dataIndex: ControleAtualizacaoColumnName.codigoUsuarioSuccess,
			key: ControleAtualizacaoColumnName.codigoUsuarioSuccess,
		},
		{
			title: 'Nome usuário',
			dataIndex: ControleAtualizacaoColumnName.nomeUsuarioSuccess,
			key: ControleAtualizacaoColumnName.nomeUsuarioSuccess,
		},
		{
			title: 'Data atualização',
			dataIndex: ControleAtualizacaoColumnName.dataAtualizacao,
			key: ControleAtualizacaoColumnName.dataAtualizacao,
			render: (text: string) => <a>{stringToDateWithHour(text)}</a>,
		},
		{
			title: 'Data Agendada',
			dataIndex: ControleAtualizacaoColumnName.dataAgendamento,
			key: ControleAtualizacaoColumnName.dataAgendamento,
			render: (text: string) => <a>{stringToDateWithHour(text)}</a>,
		},
		{
			title: 'Status Atualização',
			dataIndex: ControleAtualizacaoColumnName.statusAtualizacao,
			key: ControleAtualizacaoColumnName.statusAtualizacao,
			render: (text: string) => {
				let status = '';
				let color = '';
				if (Number(text) === 1) {
					status = "Atualizado"
					color = '#57C82D'
				}
				if (Number(text) === 2) {
					status = "Ag. Atualização"
					color = '#D5C415'
				}
				if (Number(text) === 3) {
					status = "Agu. Intervenção"
					color = '#DF790D'
				}
				if (Number(text) === 4) {
					status = "Desatualizado"
					color = '#F10D0D'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{status}</Tag>
			},
		},
		{
			title: 'Status Execução',
			dataIndex: ControleAtualizacaoColumnName.statusExecucao,
			key: ControleAtualizacaoColumnName.statusExecucao,
			render: (text: string) => {
				let status = '';
				let color = '';
				if (Number(text) === 1) {
					status = "Manual"
					color = '#DF790D';
				}
				if (Number(text) === 2) {
					status = "Automático"
					color = '#57C82D'
				}
				return <Tag style={{ width: "70px", textAlign: "center" }} color={color}>{status}</Tag>
			},
		},
	]

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
				<VStack overflow={"auto"} bgColor={"white"} borderRadius={5} minH={400} w={"full"}>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<Text fontWeight={"semibold"} fontSize={"lg"}>Controle de atualização</Text>
						<HStack w={"full"} pt={5}>
							<FormControl>
								<FormLabel>Contrato </FormLabel>
								<Input type={'text'} value={contrato} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setContrato(e.target.value)
									handleFIlter();
								}} size={"md"} variant={"filled"} placeholder={"ex: 000123"} />
							</FormControl>
							<FormControl>
								<FormLabel>Código versão </FormLabel>
								<Input value={codigoVersao} type={'text'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setCodigoVersao(e.target.value)
									handleFIlter()
								}} size={"md"} variant={"filled"} placeholder={"ex: 054"} />
							</FormControl>
							<FormControl>
								<FormLabel>Status execução </FormLabel>
								<Select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
									setStatusExecucao(e.target.value)
									handleFIlter()
								}} size={"md"} fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>
									<option value='0'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}></Text></option>
									<option value='1'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Manual</Text></option>
									<option value='2'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Automático</Text></option>

								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Data Agendada </FormLabel>
								<VStack w={"full"}>
									<ConfigProvider locale={ptBR}>
										<DatePicker format={"DD-MM-YYYY"} value={dataAgendada} onChange={(e) => { 
											setDataAgendada(e); 
											handleFIlter()
											}} placeholder="Data inicial" size="large" style={{ width: '100%', borderRadius: 4 }} />
									</ConfigProvider>
								</VStack>
							</FormControl>
							<FormControl>
								<FormLabel>Data Atualização </FormLabel>
								<VStack w={"full"}>
									<ConfigProvider locale={ptBR}>
										<DatePicker format={"DD-MM-YYYY"} value={dataAtualizado} onChange={(e) => {
											setDataAtualizado(e);
											handleFIlter()
											}} placeholder="Data atualizado" size="large" style={{ width: '100%', borderRadius: 4 }} />
									</ConfigProvider>
								</VStack>
							</FormControl>
							<FormControl>
								<FormLabel>Status atualização </FormLabel>
								<Select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
									setStatusAtualizacao(e.target.value)
									handleFIlter()
								}} size={"md"} fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>
									<option value='0'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}></Text></option>
									<option value='1'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Atualizado</Text></option>
									<option value='2'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Agendado atualização</Text></option>
									<option value='3'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Baixado e aguardando intervenção</Text></option>
									<option value='4'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Desatualizado</Text></option>
								</Select>
							</FormControl>
						</HStack>
					</VStack>
					<Table size="small" style={{ width: "100%" }} pagination={false} columns={columns} dataSource={dados} />;
					
				</VStack>
				<VStack my={4}>
						<HStack>
							{currentPosition >= 1}
							<Button disabled={currentPosition <= 1} onClick={() => { next(-1) }}><Image boxSize={"14px"} src={DoubleLeft} /></Button>
							<Text fontWeight={500}>{currentPosition} de {Math.ceil(totalItens / limite)}</Text>
							<Button disabled={currentPosition >= Math.ceil(totalItens / limite)} onClick={() => { next(1) }}><Image boxSize={"14px"} src={DoubleRigth} /></Button>
						</HStack>
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