import { HStack, Text } from "@chakra-ui/react";

type ConsoleErroType = {
	erro: string;
}
export const ConsoleErro = ({ erro }: ConsoleErroType) => {
	return (
		<HStack borderRadius={4} w={"full"} bg={"#fff0f0"}>
			<Text fontSize={"md"} fontWeight={"semibold"} m={3} color={"#ff3a2e"}>
				{erro}
			</Text>
		</HStack>
	);
}