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
	id: string,
	codigo_empresa: string,
	numero_caixa: string,
	data_divergencia: string,
	divergencia_autorizada: string,
	divergencia_cancelada: string,
	divergencia_inutilizacao: string,
	xml_ausente: string,
	divergencia_status_doc_fiscal: string,
	divergencia_qtd_itens: string,
	divergencia_valor_total: string,
	quantidade_salto: string,
	quantidade_nfe_ausente_saida: string,
	data_criacao_success: string,
	data_criacao_online: string
}

export const PendenciaConciliacao = () => {

	const [dataInical, setDataInicial] = useState<moment.Moment | null>(moment(new Date(), 'DD-MM-YYYY').subtract(7, 'd'));
	const [dataFinal, setDataFinal] = useState<moment.Moment | null>(moment(new Date(), 'DD-MM-YYYY'));

	console.log(dataInical?.format("DD-MM-YYYY"), dataFinal?.format("DD-MM-YYYY"))


	const dados: DataType[] = [
		{
			contrato: "00004",
			id: "6",
			codigo_empresa: "05",
			numero_caixa: "56",
			data_divergencia: "13 de Set. 2022",
			divergencia_autorizada: "Sim",
			divergencia_cancelada: "Sim",
			divergencia_inutilizacao: "0",
			xml_ausente: "Não",
			divergencia_status_doc_fiscal: "34",
			divergencia_qtd_itens: "54",
			divergencia_valor_total: "563",
			quantidade_salto: "7",
			quantidade_nfe_ausente_saida: "7",
			data_criacao_success: "23 de Ago. 2022",
			data_criacao_online: "25 de Set. 2021"
		},
		{
			contrato: "00004",
			id: "6",
			codigo_empresa: "05",
			numero_caixa: "56",
			data_divergencia: "13 de Set. 2022",
			divergencia_autorizada: "Sim",
			divergencia_cancelada: "Sim",
			divergencia_inutilizacao: "0",
			xml_ausente: "Não",
			divergencia_status_doc_fiscal: "34",
			divergencia_qtd_itens: "54",
			divergencia_valor_total: "563",
			quantidade_salto: "7",
			quantidade_nfe_ausente_saida: "7",
			data_criacao_success: "23 de Ago. 2022",
			data_criacao_online: "25 de Set. 2021"
		},
		{
			contrato: "00004",
			id: "6",
			codigo_empresa: "05",
			numero_caixa: "56",
			data_divergencia: "13 de Set. 2022",
			divergencia_autorizada: "Sim",
			divergencia_cancelada: "Sim",
			divergencia_inutilizacao: "0",
			xml_ausente: "Não",
			divergencia_status_doc_fiscal: "34",
			divergencia_qtd_itens: "54",
			divergencia_valor_total: "563",
			quantidade_salto: "7",
			quantidade_nfe_ausente_saida: "7",
			data_criacao_success: "23 de Ago. 2022",
			data_criacao_online: "25 de Set. 2021"
		},
		{
			contrato: "00004",
			id: "6",
			codigo_empresa: "05",
			numero_caixa: "56",
			data_divergencia: "13 de Set. 2022",
			divergencia_autorizada: "Sim",
			divergencia_cancelada: "Sim",
			divergencia_inutilizacao: "0",
			xml_ausente: "Não",
			divergencia_status_doc_fiscal: "34",
			divergencia_qtd_itens: "54",
			divergencia_valor_total: "563",
			quantidade_salto: "7",
			quantidade_nfe_ausente_saida: "7",
			data_criacao_success: "23 de Ago. 2022",
			data_criacao_online: "25 de Set. 2021"
		},
		{
			contrato: "00004",
			id: "6",
			codigo_empresa: "05",
			numero_caixa: "56",
			data_divergencia: "13 de Set. 2022",
			divergencia_autorizada: "Sim",
			divergencia_cancelada: "Sim",
			divergencia_inutilizacao: "0",
			xml_ausente: "Não",
			divergencia_status_doc_fiscal: "34",
			divergencia_qtd_itens: "54",
			divergencia_valor_total: "563",
			quantidade_salto: "7",
			quantidade_nfe_ausente_saida: "7",
			data_criacao_success: "23 de Ago. 2022",
			data_criacao_online: "25 de Set. 2021"
		},
		{
			contrato: "00004",
			id: "6",
			codigo_empresa: "05",
			numero_caixa: "56",
			data_divergencia: "13 de Set. 2022",
			divergencia_autorizada: "Sim",
			divergencia_cancelada: "Sim",
			divergencia_inutilizacao: "0",
			xml_ausente: "Não",
			divergencia_status_doc_fiscal: "34",
			divergencia_qtd_itens: "54",
			divergencia_valor_total: "563",
			quantidade_salto: "7",
			quantidade_nfe_ausente_saida: "7",
			data_criacao_success: "23 de Ago. 2022",
			data_criacao_online: "25 de Set. 2021"
		}
	];
	const [erroLog, setErroLog] = useState<DataType[]>(dados);


	const [diasSemana, setDiasSemana] = useState<DiaSemana[]>([]);
	const [filter, setFilter] = useState();

	const [currentPosition, setPosition] = useState<number>(1);
	const [totalItens, setTotalItens] = useState(0);
	const [errosNaSemana, setErrosNaSemana] = useState(0);

	const [limite, setLimite] = useState(5);

	const navigate = useNavigate();

	const columns: ColumnsType<DataType> = [
		{
			title: 'Contrato',
			dataIndex: 'contrato',
			key: 'contrato',
		},
		{
			title: 'Código empresa',
			dataIndex: 'codigo_empresa',
			key: 'codigo_empresa',
		},
		{
			title: 'Número Caixa',
			dataIndex: 'numero_caixa',
			key: 'numero_caixa',
		},
		{
			title: 'Data Divergência',
			dataIndex: 'data_divergencia',
			key: 'data_divergencia',
		},
		{
			title: 'Divergência Autorizada',
			dataIndex: 'divergencia_autorizada',
			key: 'divergencia_autorizada',
		},
		{
			title: 'Divergência Cancelada',
			dataIndex: 'divergencia_cancelada',
			key: 'divergencia_cancelada',
		},
		{
			title: 'Divergência Inutilização',
			dataIndex: 'divergencia_inutilizacao',
			key: 'divergencia_inutilizacao',
		},
		{
			title: 'Xml ausênte',
			dataIndex: 'xml_ausente',
			key: 'xml_ausente',
		},
		{
			title: 'Divergência Status Doc. Fiscal',
			dataIndex: 'divergencia_status_doc_fiscal',
			key: 'divergencia_status_doc_fiscal',
		},
		{
			title: 'Divergência Qtd. Itens',
			dataIndex: 'divergencia_qtd_itens',
			key: 'divergencia_qtd_itens',
		},
		{
			title: 'Quantidade Salto',
			dataIndex: 'quantidade_salto',
			key: 'quantidade_salto',
		},
		{
			title: 'Quantidade Nf-e Ausênte S.',
			dataIndex: 'quantidade_nfe_ausente_saida',
			key: 'quantidade_nfe_ausente_saida',
		},
		{
			title: 'Data Criação Success',
			dataIndex: 'data_criacao_success',
			key: 'data_criacao_success',
		},
		{
			title: 'Data Criação Online',
			dataIndex: 'data_criacao_online',
			key: 'data_criacao_online',
		},
		{
			title: 'Divergência Valor Total',
			dataIndex: 'divergencia_valor_total',
			key: 'divergencia_valor_total',
		},

	]


	//useEffect(() => {
	//getErros(currentPosition, limite, dataInical?.format("DD-MM-YYYY") ?? "", dataFinal?.format("DD-MM-YYYY") ?? "").then((result) => {
	//	setErroLog(result?.data?.erros)
	//	setErrosNaSemana(result?.data?.total)
	//	setTotalItens(result?.data?.total)
	//}).then((error) => {

	//})
	//getDias(dataInical?.format("DD-MM-YYYY") ?? "", dataFinal?.format("DD-MM-YYYY") ?? "").then((result) => {
	//	setDiasSemana(result?.data)
	// diasSemana.reverse();

	//	console.warn(result)
	//}).then((error) => {

	//})
	//}, [currentPosition, limite, dataFinal, dataInical]);

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
					<option value='30'>Últimos d30 dias</option>
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

			<VStack bgColor={"white"} borderRadius={5} minH={400} w={"full"}>
				<VStack p={4} w={"full"} alignItems={"start"}>
					<Text fontWeight={"semibold"}>Pendência de Conciliação</Text>
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
						scroll={{x:"max-content"}}
							onRow={(record, rowIndex) => {
								return {
									onClick: event => {
										console.log(record?.id)
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