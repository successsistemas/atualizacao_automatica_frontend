import { Center, SimpleGrid, VStack, Image, Heading, Input, Button, Text, HStack } from "@chakra-ui/react";
import { BiLogInCircle } from "react-icons/bi";
export const LoginPage = () => {
	return (
		<VStack h={"100vh"} w={"full"} bg={"white"} px={20} py={10} >
			<Center bg="white" w="80%" h={"100vh"} borderRadius={5} style={{ WebkitBoxShadow: "0px 0px 24px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
				<SimpleGrid columns={2} spacing={2}>
					<Image h="570px" borderLeftRadius={5} objectFit={"cover"} src="https://media.istockphoto.com/photos/farmer-standing-on-corn-field-against-sky-picture-id1316321081?b=1&k=20&m=1316321081&s=170667a&w=0&h=29-KGGEIq2NcDc5W75oOrk9s4HQCEafbvBZ922jK0eM=" />
					<VStack mt={10}>
						<SimpleGrid columns={1} spacing={7} alignItems={"start"} w="300px">
							<Image src={"https://i.ibb.co/71w254b/Screenshot-11.png"} />
							<Text fontWeight={"semibold"} color={"gray.400"} fontSize={"lg"}>Login</Text>
							<Input size={"lg"} variant={"filled"} placeholder={"Email"} />
							<Input size={"lg"} variant={"filled"} placeholder={"senha"} />
							<Button size={"lg"} leftIcon={<BiLogInCircle />} w="full" colorScheme={"whatsapp"}>Entrar</Button>
							<HStack>
								<Text fontSize={"lg"}>Não possui uma conta?</Text>
								<Button fontSize={"lg"} variant={"link"}>cadastre-se</Button>
							</HStack>
						</SimpleGrid>
						<>
						</>
					</VStack>
				</SimpleGrid>
			</Center>
		</VStack>
	);
}