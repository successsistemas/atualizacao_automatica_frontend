import { Avatar, AvatarBadge, Button, HStack, Image, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from '@chakra-ui/react'

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import { MdCheckCircle, MdNotifications, MdSettings } from "react-icons/md"
import { Badge } from "antd";
import { UsuarioContext } from "../context/UsuarioContext";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi"
export const ProfileColaborador = () => {
	const auth = getAuth();

	const navigate = useNavigate();
	const [, setUser] = useState<User | null>(null);
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { isOpen: isOpenConfig, onOpen: onOpenConfig, onClose: onCloseConfuig } = useDisclosure()

	const [size, setSize] = useState('md')


	const data = useContext(UsuarioContext);
	console.log(data?.user)

	function deslogar() {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				signOut(auth)
				navigate("/")
			}
		});
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			}
		});
	})

	function capitalizeFirstLetter(string: string) {
		return string?.charAt(0).toUpperCase() + string?.slice(1);
	}
	function firstName(fullName: string) {
		var tmp = fullName?.split(" ");
		return tmp ? tmp[0] : "-------";
	}
	return (
		<>
			<HStack w={"full"} mr={4} spacing={3}>

				<HStack mr={5} h={"64px"} cursor={"pointer"} onClick={onOpen} >

					{/* <Text color={"white"} fontWeight={"semibold"}>{user?.email}</Text> */}
					{/* <Button onClick={() => {deslogar()}} colorScheme={"red"}>Sair</Button> */}
					<Text textColor={"whiteAlpha.700"} fontSize={"md"} fontWeight={"semibold"}>Bem vindo de volta, {firstName(data?.user?.name)}!</Text>
					<FaUserAlt color="white" />

				</HStack>
				<Modal onClose={onClose} size={size} isOpen={isOpen}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Informações do Usuário</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text fontWeight={"semibold"}>{capitalizeFirstLetter(data?.user?.name)}</Text>
						</ModalBody>
						<ModalFooter>
							<HStack ml={3}>
								<Button onClick={onClose}>Fechar</Button>
								<Button colorScheme={"red"} onClick={onClose}>Deslogar</Button>
							</HStack>
						</ModalFooter>
					</ModalContent>
				</Modal>

				<Modal onClose={onCloseConfuig} size={size} isOpen={isOpenConfig}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Informações do Usuário</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<List spacing={3}>
								<ListItem>
									<ListIcon as={MdCheckCircle} color='green.500' />
									Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ListItem>
								<ListItem>
									<ListIcon as={MdCheckCircle} color='green.500' />
									Assumenda, quia temporibus eveniet a libero incidunt suscipit
								</ListItem>
								<ListItem>
									<ListIcon as={MdCheckCircle} color='green.500' />
									Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
								</ListItem>
								{/* You can also use custom icons from react-icons */}
								<ListItem>
									<ListIcon as={MdSettings} color='green.500' />
									Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
								</ListItem>
							</List>
						</ModalBody>
						<ModalFooter>
							<HStack ml={3}>
								<Button onClick={onCloseConfuig}>Fechar</Button>
								<Button colorScheme={"red"} onClick={onCloseConfuig}>Deslogar</Button>
							</HStack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</HStack>

		</>
	);
}