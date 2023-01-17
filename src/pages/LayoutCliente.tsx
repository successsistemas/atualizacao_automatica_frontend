
import { MenuOutlined } from '@ant-design/icons';
import { VscRepo, VscFile, VscSymbolMisc, VscCircuitBoard, VscChecklist, VscNote, VscSymbolKeyword } from "react-icons/vsc";
import { Box, Button, Center, chakra, Flex, HStack, Image, Spacer, Text, useToast, VStack } from "@chakra-ui/react";
import { Layout, Menu } from "antd";
import { MdAdd } from "react-icons/md"
import 'antd/dist/antd.css';
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Profile } from '../components/Pfofile';
import { RiDashboardFill } from "react-icons/ri"
// import LogoMenor from '../assets/logo-icon-48x48.png';
// import LogoMaior from '../assets/logonomesuc.f5f52e7a.png';
import '../style/Globalcss.css';

import type { MenuProps } from 'antd';
import { initializeApp } from 'firebase/app';
import { configuracao } from '../firebase/firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import LogoFull from "../images/farmbox_complete.png";
import { AddEvent } from '../components/addEvent';
import { SearchBar } from '../components/SearchBar';


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
export const LayoutCliente = () => {

	const toast = useToast();

	const app = initializeApp(configuracao);
	const auth = getAuth();
	const db = getFirestore(app);
	const [user, setUser] = useState<User | null>();



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
					title: 'Erro ao abri o PDE com o id: ',
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

	return (
		<LayoutChakara h={"100vh"} >
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }} >
					<Flex bg='white'>
						<Image margin={5} src='https://static.wixstatic.com/media/02d127_75b52b04b39949d2861075fa738f850c.png/v1/fill/w_159,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/02d127_75b52b04b39949d2861075fa738f850c.png' />
						<Spacer />
						<Center>
							<SearchBar />
						</Center>
						<Spacer />
						<Center>
							<Profile />
						</Center>
						<Box >
						</Box>
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
		</LayoutChakara >
	);
}
