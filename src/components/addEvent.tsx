import {
	Box, Button, Checkbox, FormControl, FormLabel, HStack, Input, Modal, ModalBody,
	ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure, useToast, VStack
} from "@chakra-ui/react";
import RichTextEditor from "@mantine/rte";
import { DatePicker } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { api } from "../api/api";
import { useAddEvento } from "../hooks/useAddEvento";
import { useEvents } from "../hooks/useEventos";
import "../style/Globalcss.css";
import './zIndexModal.css';
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const initialValue = '<p class="ql-align-center"><strong>Algum título aqui caso necessário</strong>';
export const AddEvent = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [size,] = useState('full');

	const [titulo, setTitulo] = useState('');
	const [dataInical, setDataInicial] = useState('');
	const [dataFinal, setDataFinal] = useState('');

	const [value, onChange] = useState(initialValue);

	const { apiAddEvento } = useAddEvento();
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const { mutate } = useEvents();

	axios({
		method: 'post',
		url: "http://localhost/api",
		data: { nome: "lucas" },
		headers: { "parametro1": "alguma coisa aqui" }
	}).then((response => {
		console.log("Sucesso: " + response.data)
	})).catch(e => {
		console.error("Ocorreu um error", e.response.data)
	})

	const config: AxiosRequestConfig<any> = {
		headers: {
			nome: "lucas",
			idade: 23
		}
	}

	axios.get('sua.url.aqui/api', config).then((response) => {
		console.log(response.data)
	}).catch(error => {
		console.log(error)
	})


	const salvarEvento = () => {

		//loading 
		setIsLoading(true)

		// console.log(titulo)
		// console.log(dataInical)
		// console.log(dataFinal)
		// console.log(value)
		api.post("eventos", { titulo: titulo, html: value, data_inicial: dataInical, data_final: dataFinal }).then((result: AxiosResponse<any, any>) => {
			console.log(result)
			setIsLoading(false)
			toast({
				title: "Sucesso",
				status: "success",
				description: "Evento criado com sucesso",
				duration: 2000,
				isClosable: true,
			})
			mutate();
			onClose();
		}).catch(error => {
			setIsLoading(false)
			toast({
				title: "Erro ao efetuar o login",
				status: "error",
				description: error?.message,
				duration: 2000,
				isClosable: true,
			})
		})
	}


	return (
		<>
			<HStack w={"full"}>
				<Button onClick={onOpen} leftIcon={<MdAdd />} colorScheme={"whatsapp"}>Criar versão</Button>
			</HStack>
			<Box position={"relative"} zIndex={"999"}>
				<Modal onClose={onClose} size={size} isOpen={isOpen} preserveScrollBarGap>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Criar versão</ModalHeader>
						<ModalCloseButton />
						<ModalBody bg={"white"} style={{ maxHeight: "75vh", overflowY: "scroll" }}>

							<SimpleGrid columns={4} spacing={10}>
								<VStack alignItems={"start"} >
									<FormControl isRequired>
										<FormLabel>Título</FormLabel>
										<Input onChange={(e) => { setTitulo(e.target.value) }} value={titulo} mt={2} placeholder='Título do evento' />
									</FormControl>
								</VStack>
								<VStack alignItems={"start"} w={"full"}>
									{ }
									<FormLabel>Data inicial do evento</FormLabel>
									<DatePicker onChange={(e) => { setDataInicial(e?.toString() ? e?.format().toString() : ""); console.log("momento", e?.format("YYYY-MM-DD HH:MM:SS")) }} placeholder="Selecione uma data" size="large" style={{ width: '100%', borderRadius: 4 }}
									/>
								</VStack>
								<VStack alignItems={"start"} w={"full"}>
									<FormLabel>Data final do evento</FormLabel>
									<DatePicker onChange={(e) => { setDataFinal(e?.toString() ? e?.format().toString() : "") }} placeholder="Selecione uma data" size="large" style={{ width: '100%', borderRadius: 4 }}
									/>
								</VStack>
								<VStack my={5} alignItems={"start"} w={"full"}>
									<FormLabel>Data inicial do evento</FormLabel>
									<Checkbox defaultChecked>Sem data final</Checkbox>
								</VStack>
							</SimpleGrid>
							<RichTextEditor style={{ minHeight: "100vh - 400px" }} value={value} onChange={onChange} />
						</ModalBody>
						<ModalFooter>
							<HStack spacing={3}>
								<Button colorScheme={"whatsapp"} isLoading={isLoading} onClick={salvarEvento} variant={"solid"}>Criar versão</Button>
								<Button colorScheme={"blue"} variant={"outline"} onClick={onClose}>Fechar</Button>
							</HStack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</>
	);
}