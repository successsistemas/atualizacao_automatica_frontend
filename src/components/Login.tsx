import { Button, Center, HStack, Image, Input, SimpleGrid, Text, useToast, VStack } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import Communication from "../images/animation02.gif";

const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


export const Login = () => {

	const toast = useToast();
	const auth = getAuth();

	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')
	const [loading, setLoading] = useState(false)

	onAuthStateChanged(auth, (user) => {
		if (user) {
			navigate('painel/pdes')
		}
	});

	function teste() {
		axios.get('templates/JS8PZF-BocYD/data').then(result => {
			console.log(result)
		}).catch(error => {
			return error;
		})

	}

	const LoginUser = async () => {
		setLoading(true)
		api.post("login", { email: usuario, password: senha }).then((result: AxiosResponse<any, any>) => {
			console.log(result?.request?.status)
			console.log(result?.data?.acess_token)
			if (result?.data?.isAdm) {
				localStorage.setItem('@App:token_adm', result?.data?.acess_token);
				navigate('configuracao-conexao')
				setLoading(false)
				toast({
					title: "Efetuando login adm",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
			} else {
				localStorage.setItem('@App:token', result?.data?.acess_token);
				navigate('painel/colaborador/home')
				setLoading(false)
				toast({
					title: "Efetuando login",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
			}
		}).catch(error => {
			setLoading(false)
			toast({
				title: "Erro ao efetuar o login",
				status: "error",
				description: "Suas credenciais estão incorretas.",
				duration: 2000,
				isClosable: true,
			})
		})
	}
	const LfoginUser = async () => {
		setLoading(true)
		signInWithEmailAndPassword(auth, usuario, senha)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				navigate('painel/pdes')
				setLoading(false)
				toast({
					title: "Usuario salvo com sucesso",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				toast({
					title: "Erro ao logar com o usuarios: error.message",
					status: "error",
					duration: 2000,
					isClosable: true,
				})
				setLoading(false)
			});
	}

	const navigate = useNavigate();

	return (
		<>
			<VStack h={"100vh"} bg={"white"} px={20} py={10} >
				<Center bg="white" h={"100vh"} borderRadius={5} >
					<VStack px={4}>
						<Image src={"https://static.wixstatic.com/media/02d127_75b52b04b39949d2861075fa738f850c.png/v1/fill/w_159,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/02d127_75b52b04b39949d2861075fa738f850c.png"} />
						<Text fontWeight={"semibold"} color={"gray.400"} fontSize={"lg"}>Login</Text>
						<Input type={'text'} onChange={(e: any) => { setUsuario(e.target.value) }} size={"lg"} variant={"filled"} placeholder={"Usuário"} />
						<Input type={'password'} onChange={(e: any) => { setSenha(e.target.value) }} size={"lg"} variant={"filled"} placeholder={"senha"} />
						<Button isLoading={loading} disabled={usuario === "" || senha === "" ? true : false} onClick={LoginUser} w={'100%'} _focus={{}} size={"lg"} leftIcon={<BiLogInCircle />} colorScheme={"blue"}>Entrar</Button>
						<HStack>
							<Text fontSize={"lg"}>Problema ao efetuar login?</Text>
							<Button onClick={() => { teste() }} fontSize={"lg"} variant={"link"}>Ajuda</Button>
						</HStack>
					</VStack>
				</Center>
			</VStack>
		</>
	)
}