import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Empty from "../../images/empt.svg";

export const NotFoundEstatistica = () => {
	return (<VStack>
		<Image boxSize={"150px"} src={Empty} />
		<Text color={"gray.300"}>Nenhum registro</Text>
	</VStack>);
}