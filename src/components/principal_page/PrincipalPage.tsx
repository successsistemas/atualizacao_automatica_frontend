import {
	Box,
	Button, Center, FormControl, FormLabel, HStack, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure, VStack
} from "@chakra-ui/react";
import React from "react";
import { Badge } from '@chakra-ui/react'
import { Card, DatePicker, Space, Table, Tag } from 'antd';
import { useNavigate } from "react-router-dom";

import { ArrowUpOutlined, LikeOutlined, FilterOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
import { SimpleGrid } from '@chakra-ui/react'
import { CardHome } from "./CardHome";
import "../../theme/styles.css"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import type { ColumnsType } from 'antd/es/table';

const data = [
	{
		name: "Sistema em Uso",
		uv: 4000,
		pv: 12,
		amt: 2400
	},
	{
		name: "Aguardando Atualização",
		uv: 3000,
		pv: 83,
		amt: 2210
	},
	{
		name: "Sistema com Erro de Logs",
		uv: 2000,
		pv: 45,
		amt: 2290
	},
	{
		name: "Sistema com Conciliação pendente",
		uv: 2780,
		pv: 23,
		amt: 2000
	},
	{
		name: "Sistema com Rejeições Fiscais",
		uv: 1890,
		pv: 12,
		amt: 2181
	}
];

const getIntroOfPage = (label: any) => {
	if (label === "Page A") {
		return "Page A is about men's clothing";
	}
	if (label === "Page B") {
		return "Page B is about women's dress";
	}
	if (label === "Page C") {
		return "Page C is about women's bag";
	}
	if (label === "Page D") {
		return "Page D is about household goods";
	}
	if (label === "Page E") {
		return "Page E is about food";
	}
	if (label === "Page F") {
		return "Page F is about baby food";
	}
	return "";
};
const CustomTooltip = ({ active, payload, label }: any) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${label} : ${payload[0].value}`}</p>
				<p className="intro">{getIntroOfPage(label)}</p>
			</div>
		);
	}

	return null;
};

interface DataType {
	id: string;
	contrato: string;
	codigo_versao: number;
	status_execucao: string;
	data_agendada: string;
	data_atualizacao: string;
	status: string;
	erros_log: number;
	rejeicoes_fiscais: number;
	pendencia_conciliacao: number;
}

const { RangePicker } = DatePicker;

export const PrincipalPage = () => {

	const navegar = useNavigate();

	const dados: any[] = [
		{
			id: "01",
			contrato: "00004",
			codigo_versao: "13 de Jan. 2022",
			status_execucao: "LENOVO-65",
			data_agendada: "3",
			data_atualizacao: "12 de Fev. 2022",
			status: "Atualizado",
			erros_log: 43,
			rejeicoes_fiscais: 4,
			pendencia_conciliacao: 10
		},
		{
			id: "01",
			contrato: "00004",
			codigo_versao: "13 de Jan. 2022",
			status_execucao: "LENOVO-65",
			data_agendada: "3",
			data_atualizacao: "12 de Fev. 2022",
			status: "Atualizado",
			erros_log: 43,
			rejeicoes_fiscais: 4,
			pendencia_conciliacao: 10
		},
		{
			id: "01",
			contrato: "00004",
			codigo_versao: "13 de Jan. 2022",
			status_execucao: "LENOVO-65",
			data_agendada: "3",
			data_atualizacao: "12 de Fev. 2022",
			status: "Atualizado",
			erros_log: 43,
			rejeicoes_fiscais: 4,
			pendencia_conciliacao: 10
		},
		{
			id: "01",
			contrato: "00004",
			codigo_versao: "13 de Jan. 2022",
			status_execucao: "LENOVO-65",
			data_agendada: "3",
			data_atualizacao: "12 de Fev. 2022",
			status: "Atualizado",
			erros_log: 43,
			rejeicoes_fiscais: 4,
			pendencia_conciliacao: 10
		},
	]

	const columns: ColumnsType<DataType> = [
		{
			title: 'Contrato',
			dataIndex: 'contrato',
			key: 'contrato',
			render: (text: string) => <a>{text}</a>,
		},
		{
			title: 'Código de Versão',
			dataIndex: 'codigo_versao',
			key: 'data_atcodigo_versaoualizacao',
		},
		{
			title: 'Status de Execução',
			dataIndex: 'status_execucao',
			key: 'status_execucao',
		},
		{
			title: 'Data Agendada',
			dataIndex: 'data_agendada',
			key: 'data_agendada',
		},
		{
			title: 'Data atualização',
			dataIndex: 'data_atualizacao',
			key: 'data_atualizacao',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: 'Erros de Log',
			dataIndex: 'erros_log',
			key: 'erros_log',
			render: (text: string) => <Tag color={"red"} key={2}>
				<a onClick={() => {
					navigate('/painel/colaborador/erro-logs')
				}}>{text}</a>
			</Tag>,
		},
		{
			title: 'Rejeições Fiscais',
			dataIndex: 'rejeicoes_fiscais',
			key: 'rejeicoes_fiscais',
			render: (text: string) => <Tag color={"orange"} key={2}>
				<a onClick={() => {
					navigate('/painel/colaborador/rejeicoes-fiscais')
				}}>{text}</a>
			</Tag>,
		},
		{
			title: 'Pendência de Conciliação',
			dataIndex: 'pendencia_conciliacao',
			key: 'pendencia_conciliacao',
			render: (text: string) => <Tag color={"pink"} key={2}>
				<a onClick={() => {
					navigate('/painel/colaborador/pendencia-conciliacao	')
				}}>{text}</a>
			</Tag>,
		}]

	const { isOpen, onOpen, onClose } = useDisclosure()
	const { isOpen: isOpenFilter, onOpen: onOpenFilter, onClose: onCloseFilter } = useDisclosure()

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const navigate = useNavigate();



	return (
		<>
			<VStack w={"full"}>
				<VStack overflow={"auto"} bgColor={"white"} borderRadius={5} minH={400} w={"full"}>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<Text fontWeight={"semibold"} fontSize={"lg"}>Principal</Text>

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
							<Button size={"md"} mx={10} onClick={onOpenFilter} colorScheme={"blue"}><FilterOutlined /></Button>
						</HStack>
					</VStack>
					<VStack w={"full"}>

						<SimpleGrid columns={5} spacing={4} w="full" p={4}>
						<CardHome color="green" titulo={"Sistema em uso"} valor={0}/>
						<CardHome color="blue" titulo={"Sistema em uso"} valor={0}/>
						<CardHome color="green" titulo={"Sistema em uso"} valor={0}/>
						</SimpleGrid>
					</VStack>
					<Table size="small" pagination={false} style={{ width: "100%" }} columns={columns} dataSource={dados} />;
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


			<Modal
				isOpen={isOpenFilter}
				onClose={onCloseFilter}
			>
				<ModalOverlay />
				<ModalContent>


					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>First name</FormLabel>
							<Input ref={initialRef} placeholder='First name' />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Last name</FormLabel>
							<Input placeholder='Last name' />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}