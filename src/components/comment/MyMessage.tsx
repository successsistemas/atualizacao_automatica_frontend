import { Text, VStack } from "@chakra-ui/react"
export type MyMessageType = {
	cor: string;
	nome: string;
	msg: string;
}
export const MyMessage = (cor: MyMessageType) => {
	return (
		<VStack p={3} alignItems={"start"} borderRadius={"5px"} w="full" bg={cor.cor}>
			<Text fontWeight={"semibold"}>{cor.nome}</Text>
			<Text>{cor.msg}</Text>
		</VStack>
	)
}