import { Button, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export const ResumoVersao = () => {
	return (
		<VStack py={5} alignItems={"start"} w={"full"}>
			<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Resumo da versão</Text>
			<HStack w="full">
				<AiFillCheckCircle fill="green" />
				<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Disponível para download | </Text>
				<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Lançado em 10 de set. 2022</Text>
				<Spacer />
				{/* <Button><AiFillDelete /></Button> */}
			</HStack>

		</VStack>
	);
}