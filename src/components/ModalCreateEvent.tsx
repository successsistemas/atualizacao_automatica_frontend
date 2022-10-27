import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Input, useDisclosure, VStack } from "@chakra-ui/react";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import { MdAdd } from "react-icons/md"
import RichTextEditor from "@mantine/rte";
import { useState } from "react";
import "../style/Globalcss.css"
import './zIndexModal.css'
const initialValue = '<p class="ql-align-center"><strong>Algum título aqui caso necessário</strong></p><p class="ql-align-center"><br></p><p>Se você já está inserido no mercado de programação há algum tempo, sabe que há uma grande diversidade de artifícios e ferramentas cujos objetivos são descomplicar processos muito complexos e poupar tempo na hora de desenvolver projetos.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI)</p><p><br></p>';
export const ModalCreateEvent = () => {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [size,] = useState('xl');



	const [value, onChange] = useState(initialValue);

	return (
		<>
			<HStack w={"full"}>
				<Button onClick={onOpen} leftIcon={<MdAdd />} colorScheme={"whatsapp"}>Criar novo</Button>
			</HStack>
			<Box position={"relative"} zIndex={"999"}>
				<Modal onClose={onClose} size={size} isOpen={isOpen} preserveScrollBarGap>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Criar versão</ModalHeader>
						<ModalCloseButton />
						<ModalBody bg={"white"} style={{ maxHeight: "60vh", overflowY: "scroll" }}>
							<HStack my={3} style={{}}>
								<VStack alignItems={"start"} w={"full"}>
									<FormControl isRequired>
										<FormLabel>First name</FormLabel>
										<Input placeholder='First name' />
									</FormControl>
								</VStack>

							</HStack>
							<VStack alignItems={"start"} w={"full"}>
								<FormLabel>Data inicial do evento</FormLabel>
								<DatePicker placeholder="Selecione uma data" size="large" style={{ width: '100%', borderRadius: 4 }}
								/>
							</VStack>
							<VStack alignItems={"start"} w={"full"}>
								<FormLabel>Data inicial do evento</FormLabel>
								<DatePicker placeholder="Selecione uma data" size="large" style={{ width: '100%', borderRadius: 4 }}
								/>
							</VStack>
							<VStack my={5} alignItems={"start"} w={"full"}>
								<FormLabel>Data inicial do evento</FormLabel>
								<Checkbox defaultChecked>Sem data final</Checkbox>
							</VStack>
							<RichTextEditor style={{ minHeight: "100vh - 400px" }} value={value} onChange={onChange} />
						</ModalBody>
						<ModalFooter>
							<Button colorScheme={"azul"} onClick={onClose}>Criar versão</Button>
							<VStack mx={3} />
							<Button colorScheme={"blue"} variant={"outline"} onClick={onClose}>Cancelar</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</>
	);
}