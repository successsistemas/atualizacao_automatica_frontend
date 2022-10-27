import { Center, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
export const NavBarLogin = () => {

    return (
        <HStack w="full" bg={"#1e4592"} pt={"7px"}>
            <Center w={"100%"}>
                <VStack mr={"30px"} w={"240px"} h={"100px"} fontFamily={"Inter"}>
                    <Image onClick={() => { }} cursor={"pointer"} width={'450px'} src='http://www.atenas.edu.br/uniatenas/assets/images/logoUniatenasWhite.png'></Image>
                </VStack>
            </Center>
        </HStack>
    )
}