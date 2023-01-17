import { Button, Center, FormLabel, HStack, Input, Select, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { VscFilter } from "react-icons/vsc";
import { useRecoilState } from "recoil";
import type { RangePickerProps } from 'antd/es/date-picker';
import { textState } from "../atom/paramSearchState";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import { DatePicker } from "antd";
import moment from "moment";
import { useState } from "react";

const { RangePicker } = DatePicker;



export const SearchBar = () => {

	const [, setText] = useRecoilState(textState);
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [dataInicial, setDataInicial] = useState<string>();
	const [dataFinal, setDataFinal] = useState<string>();
	function buscarPor(text: string) {
		setText(text + `?data_inicial=${dataInicial}3&data_final=${dataFinal}`);
	}

	const onChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
		if (dates) {
			setDataInicial(dates[0]?.format().toString());
			setDataFinal(dates[1]?.format().toString());
		} else {
			console.log('Clear');
		}
	};

	return (
		<>
			<VStack p={2} borderRadius={4} style={{ WebkitBoxShadow: "0px 0px 24px -5px #ADADAD", boxShadow: "0px 0px 10px -5px #ADADAD" }} bg={"white"} h={"70px"}>
				<HStack w={"full"}>
					<Input onChange={(e: any) => {
						buscarPor(e.target.value)
					}} fontWeight={"semibold"} placeholder="Título.." />

					<RangePicker
						style={{ width: "400px", height: "40px", borderRadius: "5px" }}
						defaultValue={[moment().subtract(1, "months"), moment()]}
						ranges={{
							Hoje: [moment(), moment()],
							'Esse mês': [moment().startOf('month'), moment().endOf('month')],
						}}
						onChange={onChange}
					/>

					<Button onClick={() => { }}><MdSearch size={"24px"} color={"gray"} /></Button>
				</HStack>
			</VStack>


			<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Filtro de busca</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Select fontSize={"large"} placeholder='Selecione um modo de busca'>
							<option value='option1'>Assunto</option>
							<option value='option2'>Título</option>
						</Select>
					</ModalBody>

					<ModalFooter>
						<Button onClick={onClose} colorScheme='blue' mr={3}>
							Salvar
						</Button>
						<Button onClick={onClose}>Cancelar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

		</>
	);
}