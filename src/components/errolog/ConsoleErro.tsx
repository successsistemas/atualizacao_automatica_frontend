import { HStack, Text } from "@chakra-ui/react";

type ConsoleErroType = {
	erro: string;
	cor: string;
	stringColor: string;
}
export const ConsoleErro = ({ erro, cor, stringColor }: ConsoleErroType) => {
	return (
		<HStack borderRadius={4} w={"full"} bg={cor}>
			<Text fontSize={"md"} fontWeight={"semibold"} m={3} color={stringColor}>
				{erro}
			</Text>
		</HStack>
	);
}