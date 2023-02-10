import {
	Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Table, TableContainer, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tr, useDisclosure, VStack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getErroDetail } from "../../api/api";
import { ErroLogDetalheTDO, ErroLogTDO } from "../estatistica/types";
import { ConsoleErro } from "./ConsoleErro";

export const DetalheErroLog = () => {

	const [erroLog, setErroLog] = useState<ErroLogDetalheTDO>();
	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)

	const { id } = useParams();


	useEffect(() => {
		getErroDetail(Number(id)).then((result: any) => {
			console.log(result?.data)
			setErroLog(result?.data)
		})
	}, [id])



	return (
		<>
			<VStack w={"full"}>
				<HStack spacing={5} w="full" >

				</HStack>
				<VStack bgColor={"white"} borderRadius={5} h={400} w={"full"} 	>
					<VStack px={5} py={8} alignItems={"start"} w="full">
						<HStack w="full" mb={10}>
							<Text fontWeight={"semibold"} fontSize={"lg"}>{erroLog?.titulo}</Text>
							<Spacer />
							<Button colorScheme={"gray"}><AiOutlineDownload fill="gray" /></Button>
						</HStack>

						<ConsoleErro stringColor="black" cor={"#F5EEA0"} erro={erroLog?.erro ?? "Nenum log registrado"} />
					</VStack>
				</VStack>
			</VStack>
			<Modal
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