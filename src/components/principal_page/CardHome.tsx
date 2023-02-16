import { Box, Center, Text, VStack } from "@chakra-ui/react"
export type CardHomeType = {
    titulo: string;
    valor: number;
    color: string;
}
export const CardHome = ({ titulo, valor, color }: CardHomeType) => {
    return (<>
        <Box width={"full"} >
            <Center  w="full" h={"100px"} borderStyle={"solid"} borderWidth={"1px"} borderRadius={"4px"}>
                <VStack textAlign={"center"}>
                    <Text fontSize={"sm"} color={"gray"}>
                    {titulo}
                    </Text>
                    <Text color={"black"} fontSize={"xx-large"}>
                        {valor}
                    </Text>
                </VStack>
            </Center>
            <VStack w={"full"} h={"4px"} bg={color}></VStack>
        </Box>
    </>)
}