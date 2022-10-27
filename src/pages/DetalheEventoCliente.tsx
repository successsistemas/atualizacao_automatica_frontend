import { Avatar, Button, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import RichTextEditor from '@mantine/rte';
import { AiFillPrinter } from "react-icons/ai"
import { useContext, useEffect, useState } from 'react';
import { EventoContext } from '../context/EventoContext';
import moment from 'moment';
const initialValue = '<p class="ql-align-center"><strong>Algum título aqui caso necessário</strong></p><p class="ql-align-center"><br></p><p>Se você já está inserido no mercado de programação há algum tempo, sabe que há uma grande diversidade de artifícios e ferramentas cujos objetivos são descomplicar processos muito complexos e poupar tempo na hora de desenvolver projetos.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI).</p><p>Descubra o que é o React, como ele funciona, para que é utilizado e saiba como aprender a utilizar esta tecnologia.</p><p>Entre estas ferramentas estão as&nbsp;<strong>bibliotecas</strong>&nbsp;e os&nbsp;<strong>frameworks</strong>.</p><p>Enquanto uma biblioteca pode ser entendida como um conjunto de funções organizadas que podem ser utilizadas para a construção de uma aplicação, os frameworks são uma espécie de base padronizada para o desenvolvimento delas.</p><p>No artigo de hoje, falaremos sobre o React: a biblioteca&nbsp;<a href="https://kenzie.com.br/blog/desenvolvedor-front-end/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>front-end</strong></a>&nbsp;de&nbsp;<a href="https://kenzie.com.br/blog/javascript/" rel="noopener noreferrer" target="_blank" style="color: var(--brand-color);"><strong>JavaScript</strong></a>&nbsp;mais popular do mercado para o desenvolvimento de interfaces de usuário (UI)</p><p><br></p>';

export const DetalheEventoCliente = () => {

    const { evento } = useContext(EventoContext);
    console.log("contexto:", evento?.html)

    const [value, setValue] = useState("");
    console.log("value:", value)
    //onChange("<h1>Hello world</h1>");
    function stringToDate(date: string) {

        const currentDate = moment(date).format('ll');
        return currentDate;
    }
    // Similar to componentDidMount and componentDidUpdate:

    useEffect(() => {
        setValue("<h1>Hello world</h1>");
    }, [])

    return (
        <VStack w={"full"}>
            <VStack alignItems={"start"} mt={"20px"} w={"70%"} bg={"white"} borderRadius={"10px"} style={{ WebkitBoxShadow: "0px 0px 24px -5px #ADADAD", boxShadow: "0px 0px 10px -5px #ADADAD", maxHeight: "75vh", overflowY: "scroll" }}>
                <VStack alignItems={"start"} m={4} >
                    <HStack w="full">
                        <Text color={"gray.600"} fontWeight={"semibold"} fontSize={"lg"}>{evento?.titulo}</Text>
                        {/* <Spacer />
                        <Button><AiFillPrinter /></Button> */}
                    </HStack>
                    <Text color={"gray.400"} fontWeight={"semibold"}>{stringToDate(evento?.data_inicial)} á {stringToDate(evento?.data_final)}</Text>
                    <HStack>
                        <Avatar size={"sm"} name={evento?.nome} />
                        <Text color={"gray.600"} fontWeight={"semibold"}>{evento?.nome}</Text>
                    </HStack>
                </VStack>
                {
                    evento && <RichTextEditor readOnly style={{ minHeight: "100vh - 400px", marginLeft: "5px", marginRight: "5px" }} value={evento?.html} onChange={() => { }} />
                }

            </VStack>
        </VStack>
    );
}