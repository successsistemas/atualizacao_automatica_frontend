import {
	Avatar, Button, Center, Divider, Heading, HStack, Image, Input, LinkBox, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure, useToast, VStack
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UsuarioVisualizacaoContext } from "../context/UsuariosVisualizacaoContext";
import { UserItem } from "./UserItem";

import RichTextEditor from "@mantine/rte";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import VistoCinza from "../images/dupla-verificacao.png";
import "../style/Globalcss.css";
import { MyMessage } from "./comment/MyMessage";
import { eventoColaboradorTDO } from "./tdos/eventoColaboradorTDO";
import './zIndexModal.css';
const initialValue = '<p class="ql-align-center"><strong>Algum título aqui caso necessário</strong></p><p class="ql-align-center"><br></p><p>Se você já está inserido no mercado de programação há algum tempo, sabe que há uma grande diversidade de artifícios e ferramentas cujos objetivos são descomplicar processos muito complexos e poupar tempo na hora de desenvolver projetos.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI)</p><p><br></p>';
export type Type = {
	children: eventoColaboradorTDO
}

export const 	EvemtoItemCliente = (item: Type) => {
	const users = useContext(UsuarioVisualizacaoContext);

	const navigate = useNavigate();

	const { isOpen: isOpenQuemVisualizou, onOpen: onOpenQuemVisualizou, onClose: onCloseQuemVisualizou } = useDisclosure()
	const [size,] = useState('lg')
	const toast = useToast()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [value, onChange] = useState(initialValue);

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


	return (
		<>
			<LinkBox onClick={() => { console.log("hello") }} >
				<VStack w="800px" opacity={"1"} borderRadius={"10"} style={{ WebkitBoxShadow: "0px 0px 24px -5px #ADADAD", boxShadow: "0px 0px 10px -5px #ADADAD" }} bg={"white"} height={"100px"}>
					<HStack w={"100%"}>
						<VStack borderLeftRadius={"10"} bg={"#5278FF"} w={"7px"} height={"100px"} />
						<Avatar name={item?.children?.nome} />
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
							{/* <VStack mx={5} cursor={"pointer"} onClick={onOpenQuemVisualizou}>
								<CircularProgress value={40} color='green.400'>
									<CircularProgressLabel>			<Text letterSpacing={"1px"} fontWeight={"semibold"} color={"gray.600"}>40%</Text></CircularProgressLabel>
								</CircularProgress>
								<Text letterSpacing={"1px"} fontWeight={"semibold"} color={"gray.600"}>3 de 8</Text>
							</VStack> */}
						</Center>
						<Center>
							<VStack mx={5}>
								<Button onClick={() => { navigate(item.children.hash_md5) }}><Image boxSize="24px" src={VistoCinza} /></Button>
								{/* <Button onClick={onOpen}><MdEdit color={"gray"} /></Button> */}
							</VStack>
						</Center>
					</HStack>
				</VStack>

				<Modal onClose={onCloseQuemVisualizou} size={size} isOpen={isOpenQuemVisualizou} preserveScrollBarGap>
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

				{/* alguma coisa aqui, então eu não faço a mínima idia do que falar */}
				<Modal onClose={onClose} size={"full"} isOpen={isOpen} preserveScrollBarGap>
					<ModalOverlay />
					<ModalContent bg={"gray.100"}>
						<ModalHeader>Visualizar evento</ModalHeader>
						<ModalCloseButton />

						<ModalBody style={{ maxHeight: "75vh", overflowY: "scroll" }}>

							<RichTextEditor readOnly style={{ minHeight: "100vh - 400px" }} value={value} onChange={onChange} />

							<Divider my={4} />
							<VStack>
								<VStack w={"50%"} bg={"white"} p={4} borderRadius={"4px"}>
									<VStack alignItems={"start"} w={"full"}>
										<Heading my={4} color={"gray.500"} size={"sm"}>Perguntas e Respostas</Heading>
										<HStack py={4} w={"full"}>
											<Input placeholder="Seu comentário aqui..." />
											<Button variant={"ghost"} colorScheme={"blue"}>Comentar</Button>
										</HStack>
										<MyMessage nome="Marcos" cor={"whatsapp.50"} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus vestibulum leo, sed euismod est varius at. Aenean dapibus magna quis ipsum rutrum, vel aliquet tortor consequat."} />
									</VStack>
									<VStack alignItems={"start"} w={"full"} >
										<MyMessage nome="Jhonas" cor={"whatsapp.50"} msg={"Proin leo libero, tincidunt in mattis at, fringilla quis sem. Proin fermentum varius nibh, in commodo turpis imperdiet at."} />
									</VStack>
									<VStack alignItems={"start"} w={"full"} >
										<MyMessage nome={"Você"} cor={"gray.100"} msg={"Donec rhoncus lectus eget felis dignissim, sed tincidunt risus tempor. "} />
									</VStack>
								</VStack>
							</VStack>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme={"blue"} variant={"solid"} onClick={onClose}>Fechar</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</LinkBox>
		</>

	);
}