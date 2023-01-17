import { Avatar, Button, Center, Checkbox, CircularProgress, CircularProgressLabel, Divider, FormControl, FormLabel, HStack, Input, LinkBox, SimpleGrid, Spacer, Text, useToast, VStack } from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from "react";
import { UserItem } from "./UserItem";
import { UsuarioVisualizacaoContext } from "../context/UsuariosVisualizacaoContext";

import { MdAdd } from "react-icons/md"
import RichTextEditor from "@mantine/rte";
import "../style/Globalcss.css"
import './zIndexModal.css'
import { DatePicker } from "antd";
import { eventoColaboradorTDO } from "./tdos/eventoColaboradorTDO";


import moment from "moment";
import 'moment/dist/locale/pt-br';
import 'moment/min/locales'
import { api } from "../api/api";
import { AxiosResponse } from "axios";

const initialValue = '<p class="ql-align-center"><strong>Algum título aqui caso necessário</strong></p><p class="ql-align-center"><br></p><p>Se você já está inserido no mercado de programação há algum tempo, sabe que há uma grande diversidade de artifícios e ferramentas cujos objetivos são descomplicar processos muito complexos e poupar tempo na hora de desenvolver projetos.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI)</p><p><br></p>';

moment.locale('pt-br');

export type Type = {
	children: eventoColaboradorTDO
}
export const EvemtoItem = (item: Type) => {
	const users = useContext(UsuarioVisualizacaoContext);

	const { isOpen: isOpenQuemVisualizou, onOpen: onOpenQuemVisualizou, onClose: onCloseQuemVisualizou } = useDisclosure()
	const [size,] = useState('full')
	const toast = useToast()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [value, onChange] = useState(initialValue);


	const [titulo, setTitulo] = useState<string>();
	const [dataInicial, setDataInicial] = useState<string>();

	const [dataFinal, setDataFinal] = useState<string>();

	const [hash, setHash] = useState<string>();
	const [loading, setLoading] = useState<boolean>();

	const teste = () => {
		console.log()
	}

	const onDelete = () => {
		toast({
			title: 'Evento removido.',
			description: "O evento 0003 foi removido.",
			status: 'success',
			duration: 3000,
			isClosable: true,
		})
	}

	function firstName(fullName: string) {
		var tmp = fullName?.split(" ");
		return tmp ? tmp[0] : fullName;
	}
	function htmlToText(html: string) {
		return html.replace(/<[^>]*>?/gm, '');
	}
	function stringToDate(date: string) {

		const currentDate = moment(date).format('ll');
		return currentDate;
	}

	const atualizarEvento = () => {

		//loading 
		setLoading(true)

		// console.log(titulo)
		// console.log(dataInical)
		// console.log(dataFinal)
		// console.log(value)
		api.put("eventos", { titulo: titulo, hash_md5: hash, html: value, data_inicial: dataInicial, data_final: dataFinal }).then((result: AxiosResponse<any, any>) => {
			console.log(result)
			setLoading(false)
			toast({
				title: "Sucesso",
				status: "success",
				description: "Evento atualizado com sucesso",
				duration: 2000,
				isClosable: true,
			})
			//mutate();
			onClose();
		}).catch(error => {
			setLoading(false)
			toast({
				title: "Erro ao atualizar evento",
				status: "error",
				description: error?.message,
				duration: 2000,
				isClosable: true,
			})
		})
	}


	useEffect(() => {
		setTitulo(item?.children?.titulo);
		setDataInicial(item?.children?.data_inicial);
		setDataFinal(item?.children?.data_final);
		onChange(item?.children?.html)
		setHash(item?.children?.hash_md5)
	}, [item?.children])

	return (
		<>
			<LinkBox onClick={() => { console.log("hello") }}>
				<VStack opacity={"1"} borderRadius={"10"} style={{ WebkitBoxShadow: "0px 0px 24px -5px #ADADAD", boxShadow: "0px 0px 10px -5px #ADADAD" }} bg={"white"} w={"800px"} height={"100px"}>
					<HStack w={"full"}>
						<VStack borderLeftRadius={"10"} bg={"#5278FF"} w={"7px"} height={"100px"} />
						{/* <Avatar name='Dan Abrahmov' src={item?.children?.url_image} /> */}
						<VStack pl={4} alignItems={"start"}>
							<Text fontSize={"lg"} fontWeight={"semibold"}>{firstName(item?.children?.nome)}</Text>

							<Text letterSpacing={"1px"} fontWeight={"semibold"} color={"gray.600"}>{stringToDate(item?.children?.data_inicial)} á {stringToDate(item?.children?.data_final)}</Text>
						</VStack>
						<VStack pl={4} alignItems={"start"}>
							<Text letterSpacing={"1px"} fontWeight={"semibold"} >{htmlToText(item?.children?.html).substring(0, 32) + "..."}</Text>
							<Text letterSpacing={"1px"} fontWeight={"semibold"} color={"#5278FF"}>Teste comunicação sem agendamento</Text>
						</VStack>
						<Spacer />
						<Center>
							<VStack mx={5} cursor={"pointer"} onClick={onOpenQuemVisualizou}>
								<CircularProgress value={40} color='green.400'>
									<CircularProgressLabel>			<Text letterSpacing={"1px"} fontWeight={"semibold"} color={"gray.600"}>40%</Text></CircularProgressLabel>
								</CircularProgress>
								<Text letterSpacing={"1px"} fontWeight={"semibold"} color={"gray.600"}>3 de 8</Text>
							</VStack>
						</Center>
						<Center>
							<VStack mx={5}>
								<Button onClick={onDelete}><MdDelete color="gray" /></Button>
								<Button onClick={onOpen}><MdEdit color={"gray"} /></Button>
							</VStack>
						</Center>
					</HStack>
				</VStack>

				<Modal onClose={onCloseQuemVisualizou} size={"md"} isOpen={isOpenQuemVisualizou} preserveScrollBarGap>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Quem Visualizou</ModalHeader>
						<ModalCloseButton />
						<ModalBody bg={"white"} style={{ maxHeight: "60vh", overflowY: "scroll" }}>
							<HStack w={"full"} py={2}>
								<Text fontWeight={"semibold"} color={"gray"} fontSize={"md"}>Vito por</Text>
							</HStack>
							<Divider my={3} />
							{users?.usuarios?.map((usuario: any) => {
								if (usuario?.lido) {
									return (<UserItem usuario={usuario} />);
								}
								return <></>
							})}
							<HStack w={"full"} py={2}>
								<Text fontWeight={"semibold"} color={"gray"} fontSize={"md"}>Ainda não Visualizou</Text>
							</HStack>
							<Divider my={3} />
							{users?.usuarios?.map((usuario: any) => {
								if (!usuario?.lido) {
									return (<UserItem usuario={usuario} />);
								}
								return <></>
							})}
						</ModalBody>
						<ModalFooter>
							<Button colorScheme={"blue"} variant={"ghost"} onClick={onCloseQuemVisualizou}>Cancelar</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>

				{/*  */}
				<Modal onClose={onClose} size={"full"} isOpen={isOpen} preserveScrollBarGap>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Editar evento</ModalHeader>
						<ModalCloseButton />
						<ModalBody bg={"white"} style={{ maxHeight: "75vh", overflowY: "scroll" }}>
							<SimpleGrid columns={4} spacing={10}>
								<VStack alignItems={"start"} >
									<FormControl isRequired>
										<FormLabel>Título</FormLabel>
										<Input onChange={(e) => { setTitulo(e?.target?.value) }} value={titulo} mt={2} placeholder='First name' />
									</FormControl>
								</VStack>
								<VStack alignItems={"start"} w={"full"}>
									<FormLabel>Data inicial do evento</FormLabel>
									<DatePicker onChange={(e) => { setDataInicial(e?.format("YYYY-MM-DD HH:MM:SS").toString()); console.log("momento", e?.format("YYYY-MM-DD HH:MM:SS")) }} value={moment(dataInicial)} placeholder="Selecione uma data" size="large" style={{ width: '100%', borderRadius: 4 }}
									/>
								</VStack>
								<VStack alignItems={"start"} w={"full"}>
									<FormLabel>Data final do evento</FormLabel>
									<DatePicker onChange={(e) => { setDataFinal(e?.toString() ? e?.format("YYYY-MM-DD HH:MM:SS").toString() : "") }} value={moment(dataFinal)} placeholder="Selecione uma data" size="large" style={{ width: '100%', borderRadius: 4 }}
									/>
								</VStack>
								<VStack my={5} alignItems={"start"} w={"full"}>
									<FormLabel>Data inicial do evento</FormLabel>
									<Checkbox defaultChecked>Sem data final</Checkbox>
								</VStack>
							</SimpleGrid>

							{
								value && <RichTextEditor style={{ minHeight: "100vh" }} value={value} onChange={onChange} />
							}

						</ModalBody>
						<ModalFooter>
							<HStack spacing={3}>
								<Button colorScheme={"whatsapp"} variant={"solid"} onClick={atualizarEvento}>Salvar</Button>
								<Button colorScheme={"blue"} variant={"outline"} onClick={onClose}>Fechar</Button>
							</HStack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</LinkBox>
		</>

	);
}