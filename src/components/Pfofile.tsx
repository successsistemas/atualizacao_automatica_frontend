import { Avatar, AvatarBadge, Button, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { MdNotifications } from "react-icons/md"
import { Badge } from "antd";
export const Profile = () => {
    const auth = getAuth();

    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [size, setSize] = useState('md')


    function deslogar() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                signOut(auth)
                navigate("/")
            }
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    })
    return (
        <>
            <HStack w={"full"} mr={4} spacing={3}>

                <HStack mr={5} h={"64px"} cursor={"pointer"} onClick={onOpen} >

                    {/* <Text color={"white"} fontWeight={"semibold"}>{user?.email}</Text> */}
                    {/* <Button onClick={() => {deslogar()}} colorScheme={"red"}>Sair</Button> */}
                    <Badge count={5}>
                        <Button><MdNotifications /></Button>
                    </Badge>

                </HStack>
                <Modal onClose={onClose} size={size} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Informações do Usuário</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text fontWeight={"semibold"}> Lucas Da Silva Dias</Text>
                        </ModalBody>
                        <ModalFooter>
                            <HStack ml={3}>
                                <Button onClick={onClose}>Fechar</Button>
                                <Button colorScheme={"red"} onClick={onClose}>Deslogar</Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </HStack>

        </>
    );
}