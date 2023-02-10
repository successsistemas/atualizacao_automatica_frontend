import { Button, Center, FormLabel, HStack, Image, Select, Spacer, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';
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
import type { ColumnsType } from 'antd/es/table';
import "../../theme/styles.css"

interface DataType {
	contrato: string,
	id: 18,
	titulo: string,
	detalhe: string,
	versao: string,
	data_ocorrencia: string,
	programa: string,
	os: string
}

export const ErrosLog = () => {

	const [dataInical, setDataInicial] = useState<moment.Moment | null>(moment(new Date(), 'DD-MM-YYYY').subtract(7, 'd'));
	const [dataFinal, setDataFinal] = useState<moment.Moment | null>(moment(new Date(), 'DD-MM-YYYY'));

	console.log(dataInical?.format("DD-MM-YYYY"), dataFinal?.format("DD-MM-YYYY"))

	const [erroLog, setErroLog] = useState<DataType[]>([]);
	const [diasSemana, setDiasSemana] = useState<DiaSemana[]>([]);
	const [filter, setFilter] = useState();

	const [currentPosition, setPosition] = useState<number>(1);
	const [totalItens, setTotalItens] = useState(0);
	const [errosNaSemana, setErrosNaSemana] = useState(0);

	const [limite, setLimite] = useState(5);

	const navigate = useNavigate();

	const columns: ColumnsType<DataType> = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Contrato',
			dataIndex: 'contrato',
			key: 'contrato',
		},
		{
			title: 'Título',
			dataIndex: 'titulo',
			key: 'titulo',
		},
		{
			title: 'Detalhe',
			dataIndex: 'detalhe',
			key: 'detalhe',
		},
		{
			title: 'Versão',
			dataIndex: 'versao',
			key: 'versao',
		},
		{
			title: 'Data ocorrência',
			dataIndex: 'data_ocorrencia',
			key: 'data_ocorrencia',
			render: (text) => {
				return <a>{stringToDate(text)}</a>
			}
		},
		{
			title: 'Programa',
			dataIndex: 'programa',
			key: 'programa',
		},
		{
			title: 'Os',
			dataIndex: 'os',
			key: 'os',
		}
	]


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
				<Select fontWeight={"semibold"} color={"gray.600"} bg={"white"} onChange={(e) => {
					selecionarPeriodo(e.target.value)
				}}>
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

			<VStack bgColor={"white"} borderRadius={5} h={400} w={"full"}>
				<VStack p={4} w={"full"} alignItems={"start"}>
					<Text fontWeight={"semibold"}>Erros de logs</Text>
				</VStack>
				{/* <VStack w={"full"} h={"40px"} >
					<Select bg={"white"}>
						<option value='option1'>Últimos 7 dias</option>
						<option value='option2'>Últimos 30 dias</option>
						<option value='option3'>Option 3</option>
					</Select>
				</VStack> */}
				{erroLog?.length >= 1 ?
					<>
						<Table

							onRow={(record, rowIndex) => {
								return {
									onClick: event => {
										console.log(record?.id, record?.titulo)
										//http://localhost:3000/painel/colaborador/erro-logs/19
										navigate((record?.id).toString())
									},
								}
							}}
							pagination={false} size="small" style={{ width: "100%", cursor: "pointer" }} columns={columns} dataSource={erroLog} />;
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