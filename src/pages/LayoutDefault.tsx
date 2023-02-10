import { FolderOpenOutlined, MenuOutlined, HomeOutlined, SettingOutlined} from '@ant-design/icons';
import {MdCreateNewFolder, MdNewReleases, MdSettings, MdUpdate} from "react-icons/md"
import { Box, chakra, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Button, Divider, Layout, Menu } from "antd";
import 'antd/dist/antd.css';
import React, { memo, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LogoMenor from '../assets/logo-icon-48x48.png';
import LogoMaior from '../assets/logonomesuc.f5f52e7a.png';
import '../theme/styles.css';
import { VscNewFolder } from 'react-icons/vsc';



const { Header, Sider, Content } = Layout;

const LayoutChakara = chakra(Layout);
const LayoutDefault = () => {

	const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

	const [fornecedor, setFornecedor] = useState<any>();

	const [url, setUrl] = useState<string>();
	const [collapsed, setCollapsed] = useState(true);
	const navigate = useNavigate();




	const { isOpen, onOpen, onClose } = useDisclosure()






	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			<LayoutChakara h={"100vh"} >
				<Sider theme="light" trigger={null} collapsible collapsed={collapsed} hidden={!isLargerThan600}>
					{collapsed ? <Image className={"logo"} src={LogoMenor} /> : <Image className={"logo"} src={LogoMaior} />}
					<Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
						{/* <Menu.Item onClick={() => { navigate('home/' + url) }} key="1" icon={<BiHomeAlt />}>
							Home
						</Menu.Item> */}
							<Menu.Item onClick={() => { navigate('colaborador/principal') }} key="0" icon={<HomeOutlined />}>
							Home
						</Menu.Item>
						<Menu.Item onClick={() => { navigate('colaborador/parametros') }} key="1" icon={<SettingOutlined />}>
							Configuração param.
						</Menu.Item>
						<Menu.Item onClick={() => { navigate('colaborador/versoes') }} key="2" icon={<VscNewFolder />}>
							Versões
						</Menu.Item>
							<Menu.Item onClick={() => { navigate('colaborador/gerenciamento-atualizacao-clientes') }} key="3" icon={<MdUpdate />}>
							G. de atualizações
						</Menu.Item>
						<Menu.Item onClick={() => { navigate('colaborador/controle-processo-contrato') }} key="4" icon={<FolderOpenOutlined />}>
							Exec. Processos
						</Menu.Item>
						<Menu.Item onClick={() => { navigate('colaborador/versoes') }} key="5" icon={<MdCreateNewFolder />}>
							Cadastro caminhos
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
				<Layout className="site-layout" >
					<Header className="site-layout-background" style={{ padding: 0, backgroundColor: "#228be6" }}>
						{/*bee3f8 */}
						<Flex>

							<Box color={"white"}>
								{React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
									className: 'trigger',
									onClick: isLargerThan600 ? toggle : onOpen,
								})}
							</Box>
							<Spacer />
							<Box >
								{!isLargerThan600 ?
									< Box borderRadius={100} padding={1} bg={"white"} marginTop={3} marginRight={2}>
										<Image width={"30px"} src={LogoMenor} />
									</Box>
									: <></>
								}

							</Box>
						</Flex>
					</Header>
					<Content

						className="site-layout-background"
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
							overflow: "auto"
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</LayoutChakara >


			<Modal onClose={onClose} size={"full"} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{fornecedor?.nome}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Divider />
						<Text>{fornecedor?.email}</Text>
						<Text>{fornecedor?.cnpj}</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

		</>
	);
}

export const LayoutPadrao = memo(LayoutDefault)