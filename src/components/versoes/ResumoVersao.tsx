import { Button, HStack, Spacer, Switch, Text, VStack } from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillWarning} from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

type ResumoVersaoType = {
	status: number;
	setStatus:  React.Dispatch<React.SetStateAction<number>>
}

export const ResumoVersao = ({ status, setStatus }: ResumoVersaoType) => {
	return (
		<VStack py={5} alignItems={"start"} w={"full"}>
			<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Resumo da versão</Text>
			<HStack w="full">
				<Switch isChecked={status === 1 ? true : false} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setStatus(e.target.checked ? 1 : 0)}} id='email-alerts' />
				{status === 1 ? <AiFillCheckCircle fill="green" /> : <AiFillWarning fill="orange" />}
	
				<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{status === 1 ? 'Liberado' : 'Bloqueado'} para download | </Text>
				<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>Lançado em 10 de set. 2022</Text>
				<Spacer />
				{/* <Button><AiFillDelete /></Button> */}
			</HStack>

		</VStack>
	);
}