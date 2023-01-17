import React, { useContext, useEffect, useState } from 'react'
import DoubleLeft from "../images/double-left-arrow.png"
import DoubleRigth from "../images/double-rigth-arrow.png"
import Left from "../images/left-arrow.png"
import Rigth from "../images/rigth-arrow.png"
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	HStack,
	VStack,
	Button,
	Image,
	Text,
} from '@chakra-ui/react'
import { TesteUsuariosContext } from '../context/TesteUsuariosContext'
import { api, getUsuarios } from '../api/api'
export const Test = () => {

	const [users, setUsers] = useState<any[]>();
	const [currentPosition, setPosition] = useState<number>(1);
	const [totalItens, setTotalItens] = useState(0);


	// const { data } = useContext(TesteUsuariosContext);
	//console.log(data)

	useEffect(() => {
		getUsuarios(currentPosition, 10).then((result) => {
			setTotalItens(result?.data?.total)
			setUsers(result?.data?.usuarios)
		}).catch(error => {
		})

	}, [currentPosition])

	const next = (numero: number) => {
		setPosition(currentPosition + (numero))
	}

	return <>
		<VStack>
			<TableContainer >
				<Table variant='striped' colorScheme='teal'>

					<Thead>
						<Tr>
							<Th>Praça</Th>
							<Th>Nome</Th>
							<Th >Email</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users?.map((user: any) => {
							return <Tr>
								<Td>{user?.praca}</Td>
								<Td>{user?.nome}</Td>
								<Td>{user?.email}</Td>
							</Tr>
						})}
					</Tbody>
					<Tfoot>

					</Tfoot>
				</Table>
			</TableContainer>
		</VStack>
		<VStack my={4}>
			<HStack>
				{currentPosition >= 1}
				<Button disabled={currentPosition <= 1} onClick={() => { next(-1) }}><Image boxSize={"14px"} src={DoubleLeft} /></Button>
				<Text fontWeight={500}>{currentPosition} de {Math.ceil(totalItens / 10)}</Text>
				<Button disabled={currentPosition >= Math.ceil(totalItens / 10)} onClick={() => { next(1) }}><Image boxSize={"14px"} src={DoubleRigth} /></Button>
			</HStack>
		</VStack>
	</>
}