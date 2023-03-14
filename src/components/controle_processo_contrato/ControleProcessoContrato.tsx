import {
	Button, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure, VStack
} from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import type { ColumnsType } from 'antd/es/table';
import DoubleLeft from "../../images/double-left-arrow.png";
import DoubleRigth from "../../images/double-rigth-arrow.png";

import { useNavigate } from "react-router-dom";
import { Table, Tag } from "antd";
import { getControleProcessoContrato } from "../../api/api";

interface DataType {
	contrato: string,
	razao_social: string,
	cidade: string,
	id_controle_processos: string,
	baixar: string,
	enviar_erro_log: string,
	enviar_conciliacao: string,
	enviar_rejeicao_fiscal: string,
	receber_msgs: string,
	enviar_boletos: string,
	status: string,
	cobranca: string,
	tipo_atualizacao: string
}
export const ControleProcessoContrato = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [controleAtualizacao, setControleAtualizacao] = useState<DataType[]>([]);
	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const navigate = useNavigate();
	const [totalItens, setTotalItens] = useState(0);
	const [currentPosition, setPosition] = useState<number>(1);
	const [limite, setLimite] = useState(6);

	useEffect(() => {
		getControleProcessoContrato(currentPosition, limite).then((result) => {
			setTotalItens(result?.data?.total)
			setControleAtualizacao(result?.data?.lista)
		})
	}, [currentPosition, limite])

	const next = (numero: number) => {
		setPosition(currentPosition + (numero))
	}
	const handleFIlter = () => {
		setPosition(1)
	}

	const columns: ColumnsType<DataType> = [
		{
			title: 'Contrato',
			dataIndex: 'contrato',
			key: 'contrato',
		},
		{
			title: 'Razão social',
			dataIndex: 'razao_social',
			key: 'razao_social',
		},
		{
			title: 'Cidade',
			dataIndex: 'cidade',
			key: 'cidade',
		},
		{
			title: 'Baixar',
			dataIndex: 'baixar',
			key: 'baixar',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Enviar Erro Log',
			dataIndex: 'enviar_erro_log',
			key: 'enviar_erro_log',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Enviar Conciliação',
			dataIndex: 'enviar_conciliacao',
			key: 'enviar_conciliacao',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Enviar Rejeição Fiscal',
			dataIndex: 'enviar_rejeicao_fiscal',
			key: 'enviar_rejeicao_fiscal',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Receber Mensagem',
			dataIndex: 'receber_msgs',
			key: 'receber_msgs',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Enviar Boletos',
			dataIndex: 'enviar_boletos',
			key: 'enviar_boletos',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Cobrança',
			dataIndex: 'cobranca',
			key: 'cobranca',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Sim") {
					texto = "Sim"
					color = 'green'
				}
				else {
					texto = "Não"
					color = 'red'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
		{
			title: 'Tipo Atualização',
			dataIndex: 'tipo_atualizacao',
			key: 'tipo_atualizacao',
			render: (text: string) => {
				let texto = '';
				let color = '';
				if ((text) === "Automático") {
					texto = "Automático"
					color = '#57C82D'
				}
				else {
					texto = "Manual"
					color = '#F10D0D'
				}
				return <Tag style={{ width: "100px", textAlign: "center" }} color={color}>{texto}</Tag>
			}
		},
	]



	return (
		<>
			<VStack w={"full"}>
				<HStack spacing={5} w="full" >

				</HStack>
				<VStack overflow={"auto"} bgColor={"white"} borderRadius={5} minH={400} w={"full"} >
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<Text fontWeight={"semibold"} fontSize={"lg"}>Controle de Processo por Contrato</Text>

						<HStack w={"full"}>
							<Select placeholder='Buscar por' size={"md"} fontSize={"md"} color={"gray.600"} fontWeight={"semibold"} w={"200px"}>
								<option value='option1'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Contrato</Text></option>
								<option value='option2'><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Empresa</Text></option>

							</Select>
							<Input type={'text'} onChange={(e: any) => { }} size={"md"} variant={"filled"} placeholder={"texto aqui.."} />
							<Spacer />
							<Button size={"md"} mx={10} onClick={onOpen} colorScheme={"blue"}>Buscar</Button>
						</HStack>
					</VStack>
					<Table
						onRow={(record, rowIndex) => {
							return {
								onClick: event => {
									navigate('76')
								}
							}
						}}
						size="small" style={
							{
								width: "100%",
								overflowX: "scroll",
								whiteSpace: 'nowrap',
								cursor: 'pointer'
							}} pagination={false} columns={columns} dataSource={controleAtualizacao} />;
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