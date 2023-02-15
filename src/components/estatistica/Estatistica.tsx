import { Button, Center, FormLabel, HStack, Image, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import moment from "moment";
import { useNavigate } from "react-router-dom";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getDias, getErros } from "../../api/api";
import DoubleLeft from "../../images/double-left-arrow.png";
import DoubleRigth from "../../images/double-rigth-arrow.png";
import { NotFoundEstatistica } from "./NotFoundEstatistica";
import { DiaSemana, ErroLogTDO } from "./types";
import { ConfigProvider, DatePicker } from "antd";
import "moment/locale/pt-br";
import ptBR from "antd/es/locale/pt_BR";
import { criarPeriodo } from "./util";


export const Estatistica = () => {

	const [dataInical, setDataInicial] = useState<moment.Moment | null>(moment(new Date(), 'DD-MM-YYYY').subtract(7, 'd'));
	const [dataFinal, setDataFinal] = useState<moment.Moment | null>(moment(new Date(), 'DD-MM-YYYY'));

	console.log(dataInical?.format("DD-MM-YYYY"), dataFinal?.format("DD-MM-YYYY"))

	const [erroLog, setErroLog] = useState<ErroLogTDO[]>([]);
	const [diasSemana, setDiasSemana] = useState<DiaSemana[]>([]);
	const [filter, setFilter] = useState();

	const [currentPosition, setPosition] = useState<number>(1);
	const [totalItens, setTotalItens] = useState(0);
	const [errosNaSemana, setErrosNaSemana] = useState(0);

	const [limite, setLimite] = useState(5);

	const navigate = useNavigate();


	useEffect(() => {
		getErros(currentPosition, limite, dataInical?.format("DD-MM-YYYY") ?? "", dataFinal?.format("DD-MM-YYYY") ?? "").then((result) => {
			setErroLog(result?.data?.erros)
			setErrosNaSemana(result?.data?.total)
			setTotalItens(result?.data?.total)
		}).then((error) => {

		})
		getDias(dataInical?.format("DD-MM-YYYY") ?? "", dataFinal?.format("DD-MM-YYYY") ?? "").then((result) => {
			setDiasSemana(result?.data)
			// diasSemana.reverse();

			console.warn(result)
		}).then((error) => {

		})
	}, [currentPosition, limite, dataFinal, dataInical]);

	const next = (numero: number) => {
		setPosition(currentPosition + (numero))
	}

	const data = [
		{
			ocorrencia: 'Seg',
			uv: 4000,
			dia: 10,
			amt: 2400,
		},
		{
			ocorrencia: 'Seg',
			uv: 4000,
			dia: 10,
			amt: 2400,
		}
	];
	function selecionarPeriodo(periodo: string) {

		const periodoCriado = criarPeriodo(Number(periodo))
		setDataInicial(periodoCriado.dataInicial)
		setDataFinal(periodoCriado.dataFinal)
	}
	function stringToDate(date
		: string) {

		const currentDate = moment(date).format('ll');
		return currentDate;
	}

	return (
		<VStack w={"100%"}>
			<HStack w={"full"}  >
				<Select fontWeight={"semibold"} color={"gray.600"} bg={"white"} onChange={(e) => { selecionarPeriodo(e.target.value) }}>
					<option value='7'><Text fontSize={"md"} fontWeight={"semibold"}>Últimos 7 dias</Text></option>
					<option value='30'>Últimos 30 dias</option>
					<option value='180'>Últimos 180 dias</option>
					<option value='365'>Últimos 365 dias</option>
				</Select>
				<Spacer />
				<VStack w={"full"}>

					<ConfigProvider locale={ptBR}>
						<DatePicker format={"DD-MM-YYYY"} value={dataInical} defaultValue={moment(new Date(), 'DD-MM-YYYY').subtract(7, 'd')} onChange={(e) => { setDataInicial(e); console.log("momento", e?.format("YYYY-MM-DD HH:MM:SS")) }} placeholder="Data inicial" size="large" style={{ width: '100%', borderRadius: 4 }} />
					</ConfigProvider>
				</VStack>
				<VStack w={"full"}>
					<ConfigProvider locale={ptBR}>
						<DatePicker format={"DD-MM-YYYY"} defaultValue={moment(new Date(), 'DD-MM-YYYY')} onChange={(e) => { setDataFinal(e); }} placeholder="Data final" size="large" style={{ width: '100%', borderRadius: 4, fontWeight: 600, color: "gray" }} />
					</ConfigProvider>
				
				</VStack>
			</HStack>
			<HStack spacing={5} w="full" >
				<VStack borderRadius={5} bg={"white"} w={"full"} h={300} style={{ WebkitBoxShadow: "0px 0px 12px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
					<VStack p={4} alignItems={"start"} w={"full"}>
						<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>
							Estatística de erros
						</Text>
						<Text fontSize={"sm"} color={"gray.400"} >
							Registro entre {dataInical?.format("ll")} á {dataFinal?.format("ll")}
						</Text>
						<Text fontWeight={"semibold"} fontSize={"lg"} color={"blue.500"} >
							{errosNaSemana}
						</Text>
					</VStack>
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							width={500}
							height={200}
							data={diasSemana}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="data" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="ocorrencia" stroke="orange" />

						</LineChart>
					</ResponsiveContainer>

					{/* <ResponsiveContainer width="100%" height="100%">
						<ComposedChart
							width={500}
							height={400}
							data={diasSemana}
							margin={{
								top: 20,
								right: 20,
								bottom: 20,
								left: 20,
							}}
						>
							<CartesianGrid stroke="#f5f5f5" />
							<XAxis dataKey="ocorrencia" scale="band" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="uv" barSize={20} fill="#413ea0" />
							<Line type="monotone" dataKey="dia" stroke="#ff7300" />
						</ComposedChart>
					</ResponsiveContainer> */}
				</VStack>
				{/* <VStack borderRadius={5} bg={"white"} w={"full"} h={300} style={{ WebkitBoxShadow: "0px 0px 12px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
					<VStack p={4} alignItems={"start"} w={"full"}>
						<Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>
							Eventos ocorridos
						</Text>
						<HStack>
							<VStack>
								<Text fontSize={"sm"} color={"gray.400"} >
									Erros
								</Text>
								<Text fontWeight={"semibold"} fontSize={"lg"} color={"blue.500"} >
									4
								</Text>
							</VStack>
							<VStack>
								<Text fontSize={"sm"} color={"gray.400"} >
									Usuários afetados
								</Text>
								<Text fontWeight={"semibold"} fontSize={"lg"} color={"blue.500"} >
									4
								</Text>
							</VStack>
						</HStack>
					</VStack>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							width={500}
							height={200}
							data={data}
							style={{ fontSize: "14px" }}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="pv" fill="#8884d8" />
							<Bar dataKey="uv" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				</VStack> */}
			</HStack>
			<VStack bgColor={"white"} borderRadius={5} h={400} w={"full"} style={{ WebkitBoxShadow: "0px 0px 12px -5px #ADADAD", boxShadow: "0px 0px 24px -5px #ADADAD" }}>
				{/* <VStack w={"full"} h={"40px"} >
					<Select bg={"white"}>
						<option value='option1'>Últimos 7 dias</option>
						<option value='option2'>Últimos 30 dias</option>
						<option value='option3'>Option 3</option>
					</Select>
				</VStack> */}
				{erroLog?.length >= 1 ?
					<>
						<TableContainer fontSize={"lg"} w={"full"} >
							<Table variant='simple'>
								{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
								<Thead>
									<Tr>
										<Th><Text fontSize={"md"} fontWeight={"semibold"}>Contrato</Text></Th>
										<Th><Text fontSize={"md"} fontWeight={"semibold"}>Erro</Text></Th>
										{/* <Th><Text fontSize={"md"} fontWeight={"semibold"}>Detalhe</Text></Th> */}
										<Th><Text fontSize={"md"} fontWeight={"semibold"}>Versão</Text></Th>
										<Th><Text fontSize={"md"} fontWeight={"semibold"}>Data</Text></Th>
										<Th><Text fontSize={"md"} fontWeight={"semibold"}>Programa</Text></Th>
										<Th><Text fontSize={"md"} fontWeight={"semibold"}>Os</Text></Th>
										{/* <Th><Text fontSize={"md"} fontWeight={"semibold"}>Evento</Text></Th>
								<Th><Text fontSize={"md"} fontWeight={"semibold"}>Usuário</Text></Th> */}
									</Tr>
								</Thead>
								<Tbody>
									{erroLog?.map((erro: ErroLogTDO) => {
										return <Tr className="itemLog" cursor={"pointer"} onClick={() => { navigate(erro?.id.toString()) }}>
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{erro?.contrato}</Text></Td>
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{erro?.titulo}</Text></Td>
											{/* <Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{erro?.detalhe.substring(0, 30) + "..."}</Text></Td> */}
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{erro?.versao}</Text></Td>
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{stringToDate(erro?.data_ocorrencia)}</Text></Td>
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{erro?.programa}</Text></Td>
											<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>{erro?.os}</Text></Td>
											{/* <Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>2</Text></Td>
									<Td><Text fontSize={"md"} color={"gray.600"} fontWeight={"semibold"}>6</Text></Td> */}
										</Tr>
									})}

								</Tbody>
								<Tfoot>
								</Tfoot>
							</Table>
						</TableContainer>
						<VStack my={4}>
							<HStack>
								{currentPosition >= 1}
								<Button disabled={currentPosition <= 1} onClick={() => { next(-1) }}><Image boxSize={"14px"} src={DoubleLeft} /></Button>
								<Text fontWeight={500}>{currentPosition} de {Math.ceil(totalItens / limite)}</Text>
								<Button disabled={currentPosition >= Math.ceil(totalItens / limite)} onClick={() => { next(1) }}><Image boxSize={"14px"} src={DoubleRigth} /></Button>
							</HStack>
						</VStack>
					</>
					: <Center h={400}>
						<NotFoundEstatistica />
					</Center>}
			</VStack>
		</VStack >
	);
}