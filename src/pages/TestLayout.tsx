
import { Box, Button, Center, chakra, Flex, HStack, Image, List, ListIcon, ListItem, Spacer, Text, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { Layout, Menu } from "antd";
import 'antd/dist/antd.css';
import React, { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { VscChecklist, VscCircuitBoard, VscNote, VscRepo, VscSymbolKeyword, VscSymbolMisc } from "react-icons/vsc";
import { Outlet, useNavigate } from "react-router-dom";
// import LogoMenor from '../assets/logo-icon-48x48.png';
// import LogoMaior from '../assets/logonomesuc.f5f52e7a.png';
import '../style/Globalcss.css';

import type { MenuProps } from 'antd';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { AddEvent } from '../components/addEvent';
import { ProfileColaborador } from '../components/ProfileColaborador';
import { SearchBar } from '../components/SearchBar';
import { configuracao } from '../firebase/firebase';
import { CheckUser } from "../checker/CheckUser";
import { UsuarioProvider } from "../context/UsuarioContext";
import { RiMore2Fill } from "react-icons/ri"
import { AiOutlineLineChart } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi";
import Logo from "../images/result.svg";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai"
import { AiOutlineFileAdd } from "react-icons/ai"
import { HiOutlineLogout } from "react-icons/hi"
import { FolderOpenOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const itensSecundarios = () => {
	return 4 - 8;
}

const items: MenuItem[] = [
	getItem(<Text fontSize={"lg"} color={"gray.500"}>Dashboard</Text>, '1', <RiDashboardFill color={"gray.600"} size={"20px"} />),
	getItem(<Text fontSize={"lg"} color={"gray.500"}>Safra</Text>, "2", <VscSymbolKeyword color={"gray.600"} size={"20px"} />),
	getItem(<Text fontSize={"lg"} color={"gray.500"}>Estoque</Text>, '3', <VscNote color={"gray.600"} size={"20px"} />),
	getItem(<Text fontSize={"lg"} color={"gray.500"}>Financeiro</Text>, 'sub1', <VscChecklist color={"gray.600"} size={"20px"} />, [
		getItem(<Text fontSize={"lg"} color={"gray.500"}>Lançamentos</Text>, '4'),
		getItem(<Text fontSize={"lg"} color={"gray.500"}>Emissão de Notas</Text>, '5'),
	]),
	getItem(<Text fontSize={"lg"} color={"gray.500"}>Pedidos</Text>, '6', <VscSymbolMisc color={"gray.600"} size={"20px"} />),
	getItem(<Text fontSize={"lg"} color={"gray.500"}>Relatórios</Text>, '7', <VscRepo color={"gray.600"} size={"20px"} />),
	getItem(<Text fontSize={"lg"} color={"gray.500"}>Cadastros</Text>, '8', <VscCircuitBoard color={"gray.600"} size={"20px"} />),
];


//const { Header, Sider, Content } = Layout;

const LayoutChakara = chakra(Layout);
export const TesteLayout = () => {

	const toast = useToast();

	const app = initializeApp(configuracao);
	const auth = getAuth();
	const db = getFirestore(app);
	const [user, setUser] = useState<User | null>();


	const { isOpen: isOpenConfig, onOpen: onOpenConfig, onClose: onCloseConfuig } = useDisclosure()

	const navigate = useNavigate();

	const [collapsed, setCollapsed] = useState(true);
	const toggle = () => {
		setCollapsed(!collapsed);
	};

	const abrirPde = (path: string) => {


		onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser(user)

				let newObject: any = window.localStorage.getItem(user.uid);
				const idPde = JSON.parse(newObject).idPde;
				navigate(`/painel/pde/${idPde}/${path}`)
			} else {
				toast({
					title: 'Erro ao abri o PDE com o id:',
					status: "error",
					description: "You must be logged to open a PDE",
					duration: 2000,
					isClosable: true,
				})
			}
		});


	}

	const onClickMenu: MenuProps['onClick'] = e => {
		const keypath = parseInt(e.keyPath[0]);
		if (keypath === 1) {
			navigate("pdes")
		}
		if (keypath === 2) {
			//
			abrirPde("ficha-cadastral")

		}
		if (keypath === 3) {
			abrirPde("ementaobjetivo")
		}
		if (keypath === 4) {
			abrirPde("nucleoformativo")
		}
		if (keypath === 5) {
			abrirPde("listagem-nucleo-formativo")
		}
		if (keypath === 6) {
			abrirPde("estrategias")
		}
		if (keypath === 7) {
			abrirPde("bibliografias")
		}
		if (keypath === 8) {
			abrirPde("planejamento-atividades")
		}
		console.log(keypath)
	}

	function navegarPara(uri: string) {
		navigate(uri);
		onCloseConfuig();
	}

	return (
		<UsuarioProvider>
			<LayoutChakara h={"100vh"} >
			<Sider theme="light" trigger={null} collapsible collapsed={collapsed} >
				
					<Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
						{/* <Menu.Item onClick={() => { navigate('home/' + url) }} key="1" icon={<BiHomeAlt />}>
							Home
						</Menu.Item> */}
						<Menu.Item onClick={() => { navigate('cotacao/' + 'urlaqui') }} key="2" icon={<FolderOpenOutlined />}>
							Cotações abertas
						</Menu.Item>
						{/*	<Menu.Item onClick={() => { navigate('cotacoes-fechadas') }} key="3" icon={<MailOutlined />}>
						Cotações fechadas
					</Menu.Item> */}
						{/*<Menu.Item key="4" onClick={() => { navigate('relatorios/' + url) }} icon={<FilePdfOutlined />}>
						Relatórios
				</Menu.Item>*/}

						{/* <Menu.Item key="5" onClick={() => { navigate('configuracao/' + url) }} icon={<SettingOutlined />}>
						Configurar usuários
					</Menu.Item> */}
					</Menu>
				</Sider>
				<Layout className="site-layout">	
					<Header className="site-layout-background" style={{ padding: 0 }}>

						<Flex bg='#2F618F' zIndex={2000}>
							<Image margin={5} w={150} src={Logo} />
							<Spacer />
							<Center>
								{/* <SearchBar /> */}
							</Center>
							<Spacer />
							<Center>
								<ProfileColaborador />
							</Center>

							<Center mr={3}>
								<Button variant={"link"} onClick={onOpenConfig}>
									<RiMore2Fill size={"24px"} color="white" />
								</Button>
							</Center>

						</Flex>
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: '12px 10px',
							padding: 10,
							minHeight: 280,
							overflowY: 'auto'
						}}
					>

						<Outlet />

					</Content>
					<Footer>
						{/* <AddEvent /> */}
					</Footer>
				</Layout>
				<Modal onClose={onCloseConfuig} size={"sm"} isOpen={isOpenConfig}>
					<ModalOverlay />
					<ModalContent>
						<ModalBody>
							<List spacing={3} m={4}>
								<ListItem>
									<HStack className="listSetting" cursor={"pointer"} onClick={() => { navegarPara("colaborador/versoes") }}>
										<VStack color={"gray.300"}><AiOutlineFileAdd size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Versões
										</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack className="listSetting" cursor={"pointer"} onClick={() => { navegarPara("colaborador/parametros") }}>
										<VStack color={"gray.300"}><AiFillSetting size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Configuração de parâmetros
										</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack onClick={() => { navegarPara("colaborador/home") }} className="listSetting" cursor={"pointer"} >
										<VStack color={"gray.300"}><AiOutlineLineChart size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Erros de log
										</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack onClick={() => { navegarPara("colaborador/controle-processo-contrato") }} className="listSetting" cursor={"pointer"} >
										<VStack color={"gray.300"}><AiOutlineLineChart size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Controle de processo por contrato
										</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack onClick={() => { navegarPara("colaborador/home") }} className="listSetting" cursor={"pointer"} >
										<VStack color={"gray.300"}><AiOutlineLineChart size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Pendências de conciliação
										</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack onClick={() => { navegarPara("colaborador/gerenciamento-atualizacao-clientes") }} className="listSetting" cursor={"pointer"} >
										<VStack color={"gray.300"}><AiOutlineLineChart size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Gerenciamento de atualização
										</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack onClick={() => { navegarPara("colaborador/home") }} className="listSetting" cursor={"pointer"} >
										<VStack color={"gray.300"}><AiOutlineLineChart size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Rejeições fiscais
										</Text>
									</HStack>
								</ListItem>
								<ListItem>
									<HStack className="sairButtonList" cursor={"pointer"} >
										<VStack color={"gray.300"}><FiLogOut size={"24px"} /></VStack>
										<Text fontSize={"lg"} fontWeight={"semibold"}>
											Sair
										</Text>
									</HStack>
								</ListItem>
							</List>
						</ModalBody>
						<ModalFooter>

						</ModalFooter>
					</ModalContent>
				</Modal>
			</LayoutChakara >
		</UsuarioProvider>
	);
}
