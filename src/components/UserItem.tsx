import {
	Avatar, Button, Divider, HStack, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import { useState } from "react";
type UsuarioProp = {
	usuario: any
}
export const UserItem = (props: UsuarioProp) => {




	const { isOpen: isOpenQuemVizualizou, onOpen: onOpenQuemVizualizou, onClose: onCloseQuemVizualizou } = useDisclosure()
	const [size,] = useState('md')

	return (
		<>
			<VStack opacity={"1"} borderRadius={"10"} bg={"gray.100"} my={3} w={"full"} height={"60px"}>
				<HStack w={"full"}>
					<VStack borderLeftRadius={"10"} bg={"whatsapp.100"} w={"7px"} height={"60px"} />
					<Avatar name='Dan Abrahmov' src={props.usuario.imageUrl} />
					<VStack pl={4} alignItems={"start"}>
						<Text fontSize={"lg"} fontWeight={"semibold"}>{props.usuario.autor}</Text>

						<Text letterSpacing={"1px"} fontWeight={"semibold"} color={"gray.600"}>Hoje ás 16:15</Text>
					</VStack>

				</HStack>
			</VStack>

			<Modal onClose={onCloseQuemVizualizou} size={size} isOpen={isOpenQuemVizualizou} preserveScrollBarGap>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Dados do evento</ModalHeader>
					<ModalCloseButton />
					<ModalBody bg={"white"} style={{ maxHeight: "60vh", overflowY: "scroll" }}>
						<HStack w={"full"} py={7}>
							<Text fontWeight={"semibold"} color={"gray"} fontSize={"md"}>Vito por</Text>
						</HStack>
						<Divider />
						<VStack>

						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme={"azul"} onClick={onCloseQuemVizualizou}>Criar novo</Button>
						<VStack mx={3} />
						<Button colorScheme={"blue"} variant={"outline"} onClick={onCloseQuemVizualizou}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}