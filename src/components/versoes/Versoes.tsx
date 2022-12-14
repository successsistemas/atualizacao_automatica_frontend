import {
	Button, Center, Editable, EditableInput, EditablePreview, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, toast, Tr, useDisclosure, useToast, VStack
} from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DoubleLeft from "../../images/double-left-arrow.png";
import DoubleRigth from "../../images/double-rigth-arrow.png";

import { useNavigate } from "react-router-dom";
import { criarVersao, getFilesName, getVersoes } from "../../api/api";
import { Versao } from "./type";
export const Versoes = () => {

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false)

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [fileNames, setFileNames] = useState<string[]>();
	const [titulo, setTitulo] = useState('');
	const [versao, setVersao] = useState('');
	const [descricao, setDescricao] = useState('');
	const [nomeArquivo, setNomeArquivo] = useState('0');
	const [codigo, setCodigo] = useState('');
	const [confirmacao, setConfirmacao] = useState('');
	const [todosCamposPreenchidos, setTodosCamposPreenchidos] = useState(false)
	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const [versoes, setVersoes] = useState<Versao[]>();

	const [limite, setLimite] = useState(5);
	const [currentPosition, setPosition] = useState<number>(1);
	const [totalItens, setTotalItens] = useState(0);

	const toast = useToast();

	useEffect(() => {
		getFilesName().then(result => {
			setFileNames(result?.data)
		})
		getVersoes(currentPosition, limite).then((result) => {
			setVersoes(result?.data?.versoes)
			setTotalItens(result?.data?.total)
		})
	}, [currentPosition, limite])

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
		if (!(!titulo || !versao || !nomeArquivo || !descricao || !confirmacao || !codigo)) {
			if (confirmacao === "eu confirmo que desejo lan??ar essa vers??o") {
				criarVersao({ codigo: codigo, descricao: descricao, nomeArquivo: nomeArquivo, titulo: titulo, versao: versao, data_lancamento: "null", id: "null" }).then((result) => {
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
					title: "Por favor, confirme que deseja executar essa a????o.",
					status: "warning",
					duration: 2000,
					isClosable: true,
				})
			}

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
		setTitulo('')
		setVersao('')
		setCodigo('')
		setNomeArquivo('')
		setDescricao('')
		setConfirmacao('')
		onClose();
		toast({
			title: "Vers??o criada com sucesso!",
			status: "success",
			duration: 2000,
			isClosable: true,
		})
	}
	return (
		<>
			<VStack w={"80%"}>
				<HStack spacing={5} w="full" >

				</HStack>
				<VStack bgColor={"white"} borderRadius={5} w={"full"} style={{ WebkitBoxShadow: "0px 0px 12px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<Text fontWeight={"semibold"} fontSize={"lg"}>Produ????o</Text>

						<HStack w={"full"}>

							<Text fontSize={"md"} color={"gray.400"}>Crie e gerencie vers??es de produ????o para disponibilizar para todos os usu??rios.</Text>
							<Spacer />
							<Button onClick={onOpen} colorScheme={"blue"}>Criar nova vers??o</Button>
						</HStack>
					</VStack>
					<TableContainer fontSize={"lg"} w={"full"}>
						<Table variant='simple'>
							{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Vers??o</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>C??digo</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>Lan??amento</Text></Th>
									<Th><Text fontSize={"md"} fontWeight={"semibold"}>A????o</Text></Th>
								</Tr>
							</Thead>
							<Tbody>
								{versoes?.map((version) => {
									return (
										<Tr className="itemLog" cursor={"pointer"}>
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{version?.versao}</Text></Td>

											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{version?.codigo}</Text></Td>
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{moment(version?.data_lancamento).format("l")}</Text></Td>
											<Td><Button colorScheme={"blue"} onClick={() => { navigate((version?.id).toString()) }} variant={"link"}>Detalhe</Button></Td>
										</Tr>
									);
								})}


							</Tbody>
							<Tfoot>

							</Tfoot>
						</Table>
					</TableContainer>
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
					<ModalHeader>Criar vers??o de produ????o</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6} >
						<VStack overflow={"auto"} maxH={300}>
							<FormControl>
								<FormLabel>T??tulo</FormLabel>
								<Input value={titulo} onChange={(e) => { setTitulo(e.target.value); }} ref={initialRef} placeholder='Algum t??tulo aqui' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Vers??o</FormLabel>
								<Input value={versao} onChange={(e) => { setVersao(e.target.value); }} placeholder='ex: x' />
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>C??digo</FormLabel>
								<Input value={codigo} onChange={(e) => { setCodigo(e.target.value); }} placeholder='ex: 2' />
							</FormControl>


							<FormControl mt={4}>
								<FormLabel>Nome do arquivo</FormLabel>
								<Select placeholder="Selecione um arquivo" defaultValue={nomeArquivo} onChange={(e) => { setNomeArquivo(e.target.value); }} fontSize={"large"} >
									{fileNames?.map((fileName, index) => {
										return (
											<option value={index}>{fileName}</option>
										);
									})}
								</Select>
							</FormControl>
							<FormControl>
								<FormLabel>Descri????o</FormLabel>
								<Textarea
									value={descricao} onChange={(e) => { setDescricao(e.target.value); }}
									placeholder='Descreva a vers??o'
									size='sm'
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Por favor, digite "eu confirmo que desejo lan??ar essa vers??o"</FormLabel>
								<Input value={confirmacao} onChange={(e) => { setConfirmacao(e.target.value); }} />
							</FormControl>


						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button isLoading={loading} colorScheme='blue' mr={3} onClick={validarCampos}>
							Lan??ar
						</Button>
						<Button onClick={onClose}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}