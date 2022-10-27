import { Box, Checkbox, SimpleGrid, Text, VStack } from "@chakra-ui/react";
export const CheckBoxControleProcesso = () => {
	return (
		<VStack py={5} alignItems={"start"} w={"full"}>
			<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Configuração por contrato</Text>
			<SimpleGrid w="full" columns={5} spacing={5}>
				<Box w={"full"} height='80px'><Checkbox defaultChecked>Enviar erro de log</Checkbox></Box>
				<Box w={"full"} height='80px'><Checkbox defaultChecked>Enviar conciliação</Checkbox></Box>
				<Box w={"full"} height='80px'><Checkbox defaultChecked>Enviar rejeição fiscal</Checkbox></Box>
				<Box w={"full"} height='80px'><Checkbox defaultChecked>Receber mensagens</Checkbox></Box>
				<Box w={"full"} height='80px'><Checkbox defaultChecked>Enviar boletos</Checkbox></Box>
				<Box w={"full"} height='80px'><Checkbox defaultChecked>Cobranças</Checkbox></Box>
				<Box w={"full"} height='80px'><Checkbox defaultChecked>Data último envio</Checkbox></Box>
			</SimpleGrid>
		</VStack>
	);
}