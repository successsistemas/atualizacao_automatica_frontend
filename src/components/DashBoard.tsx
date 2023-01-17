import { Center, HStack, SimpleGrid, VStack, Text, Spacer, Button, Divider, Image } from "@chakra-ui/react";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardImage from "../images/dashboard.png";


export const DashBoard = () => {

	const data01 = [
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
		{ name: 'Group E', value: 278 },
		{ name: 'Group F', value: 189 },
	];

	const data02 = [
		{ name: 'Group A', value: 2400 },
		{ name: 'Group B', value: 4567 },
		{ name: 'Group C', value: 1398 },
		{ name: 'Group D', value: 9800 },
		{ name: 'Group E', value: 3908 },
		{ name: 'Group F', value: 4800 },
	];


	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

	return (
		<>

			<VStack w="full">
				<SimpleGrid columns={2} spacing={4} w="full" p={4}>
					<VStack borderRadius={5} bg={"whatsapp.500"} w={"full"} h={"230px"} style={{ WebkitBoxShadow: "0 1px 2px,rgba(0,0,0,.09)", boxShadow: "0 1px 2px rgb(0 0 0 / 9%)" }}>
						<Center w="full" h={"100vh"}>
							<VStack>
								<Text color={"white"} fontSize={"large"} fontWeight={"semibold"}>Boa tarde, Lucas!</Text>
								<HStack>
									<Text color={"whiteAlpha.600"} fontSize={"large"} fontWeight={"semibold"}>R$</Text>
									<Text color={"white"} fontSize={"48px"} fontWeight={"semibold"}>35.900,00</Text>
								</HStack>
								<Text color={"whiteAlpha.600"} fontSize={"large"} fontWeight={"semibold"}>Saldo gerado</Text>
							</VStack>
						</Center>
					</VStack>
					<VStack borderRadius={5} bg={"white"} w={"full"} h={"230px"} style={{ WebkitBoxShadow: "0 1px 2px,rgba(0,0,0,.09)", boxShadow: "0 1px 2px rgb(0 0 0 / 9%)" }}>
						<div style={{ width: '100%', height: "100%" }}>
							<ResponsiveContainer width="100%" height="100%">
								<PieChart width={400} height={400}>
									<Pie
										dataKey="value"
										isAnimationActive={false}
										data={data01}
										cx="50%"
										cy="50%"
										outerRadius={80}
										fill="#8884d8"
										label
									/>
									<Tooltip />
								</PieChart>
							</ResponsiveContainer>
						</div>
					</VStack>
					<VStack p={5} borderRadius={5} bg={"white"} w={"full"} h={"400px"} style={{ WebkitBoxShadow: "0 1px 2px,rgba(0,0,0,.09)", boxShadow: "0 1px 2px rgb(0 0 0 / 9%)" }}>
						<HStack w="full">
							<Text fontSize={"large"} fontWeight={"semibold"}>Talhões</Text>
							<Spacer />
							<Button colorScheme={"whatsapp"}>Novo talhão</Button>
						</HStack>
						<Divider />


					</VStack>
					<VStack p={5} borderRadius={5} bg={"white"} w={"full"} h={"400px"} style={{ WebkitBoxShadow: "0 1px 2px,rgba(0,0,0,.09)", boxShadow: "0 1px 2px rgb(0 0 0 / 9%)" }}>
						<Text color={"gray.600"} fontSize={"large"} >Minhas contas</Text>
						<HStack w="full">
							<Image borderRadius={3} boxSize={"48px"} src={"https://raichu-uploads.s3.amazonaws.com/company_6901e2c3-a1b4-4b66-8325-324708c1482c.png"} />
							<VStack alignItems={"start"}>
								<Text color={"gray.600"} fontSize={"large"} >Banco do Brasil S.A</Text>
								<Text color={"gray.600"} fontSize={"12px"}>Conta corrente</Text>
							</VStack>
							<Spacer />
							<Center>
								<Text color={"blue.500"} fontSize={"large"} fontWeight={"semibold"}>R$ 76.500,00</Text>
							</Center>
						</HStack>
						<Divider />
						<HStack w="full">
							<Image borderRadius={3} boxSize={"48px"} src={"https://www.paranacooperativo.coop.br/ppc/images/Comunicacao/2021/noticias/08/04/sicoob/sicoob_04_08_2021.png"} />
							<VStack alignItems={"start"}>
								<Text color={"gray.600"} fontSize={"large"} >Bancoob - Banco Cooperativo do Brasil </Text>
								<Text color={"gray.600"} fontSize={"12px"}>Conta corrente</Text>
							</VStack>
							<Spacer />
							<Center>
								<Text color={"blue.500"} fontSize={"large"} fontWeight={"semibold"}>R$ 3,444,99</Text>
							</Center>
						</HStack>
						<Divider />
					</VStack>
				</SimpleGrid>
			</VStack>
		</>
	);
}