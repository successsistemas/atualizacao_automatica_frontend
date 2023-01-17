import moment from 'moment';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from "pdfmake/interfaces";
const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;
moment.locale('pt');

const corHeadTable = '#D6E7FF'
// const corHeadTableGray = '#D9D9D9'

const fontSizeL = 18;
const corHeadTableb = '#D6E7FF'
// const corHeadTableGray = '#D9D9D9'

const fontSize = 9;

export const generateADocument = () => {

	let documentDefinition: TDocumentDefinitions = {

		content: [

		]
	}
	return documentDefinition;
}

export const imprimir = async (download: boolean, fileName: string | null) => {
	let definition: TDocumentDefinitions = generateADocument();

	//	const total: any[] = getTotal(totalS, totalDesconto, totalFrete, formaPagamento);

	definition.content = [...await getCabecalho()];

	const headerObj: any[] = [
		{
			width: 500,
			alignment: 'center',
			margin: [0, 40],
			image: await getBase64ImageFromURL("https://i.ibb.co/5M9b0sf/cabecalho.jpg")
		}
	]

	const footerObj: any[] = [
		{
			alignment: 'center',
			text: `PARACATU - MG, ` + moment().format('LLL').toUpperCase() + `.`,
			fontSize: 14
		}
	]
	definition.header = [...headerObj]
	definition.footer = [...footerObj]
	//pdfMake.createPdf(definition);

	if (download && fileName !== null) {
		pdfMake.createPdf(definition).download(fileName);
	} else {
		pdfMake.createPdf(definition).print();
	}

}

function getBase64ImageFromURL(url: string) {
	return new Promise((resolve, reject) => {
		var img = new Image();
		img.setAttribute("crossOrigin", "anonymous");

		img.onload = () => {
			var canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;

			var ctx = canvas.getContext("2d");
			ctx?.drawImage(img, 0, 0);

			var dataURL = canvas.toDataURL("image/png");

			resolve(dataURL);
		};

		img.onerror = error => {
			reject(error);
		};

		img.src = url;
	});
}

const getCabecalho = async () => {

	const now: moment.Moment = moment();

	const head: any[] = [

		{
			margin: [0, 80, 0, 15],
			table: {
				widths: ['*'],
				body: [
					[{ text: 'PLANO DE ENSINO DA DISCIPLINA', alignment: 'center', bold: true, fontSize: 14 }],
				]
			},

		},
		{
			table: {
				widths: [55, '*', 90, '*'],
				body: [
					[
						{ text: 'Depto:', fontSize: 12, bold: true },
						{ text: 'Sistemas de Informação', fontSize: 12 },
						{ text: 'Disciplina', fontSize: 12, bold: true },
						{ text: 'Computabilidade e Algoritimo', fontSize: 12 },
					],

				]
			},
		},
		{
			table: {
				widths: [55, '*', 90, '*'],
				body: [
					[
						{ text: 'curso:', fontSize: 12, bold: true },
						{ text: 'Sistemas de Informação', fontSize: 12 },
						{ text: 'Carga Horária', fontSize: 12, bold: true },
						{ text: '80', fontSize: 12 },
					],

				]
			},
		},
		{
			table: {
				widths: [55, '*', 90, '*'],
				body: [
					[
						{ text: 'Semestre:', fontSize: 12, bold: true },
						{ text: '1', fontSize: 12 },
						{ text: 'Créditos', fontSize: 12, bold: true },
						{ text: '23', fontSize: 12 },
					],

				]
			},
		},
		{
			table: {
				widths: [55, '*', 90, '*'],
				body: [
					[
						{ text: 'Ano:', fontSize: 12, bold: true },
						{ text: '2022', fontSize: 12 },
						{ text: 'Professor', fontSize: 12, bold: true },
						{ text: 'Alisson', fontSize: 12 },
					],

				]
			},
		},
		{
			table: {
				widths: [55, '*', 90, '*'],
				body: [
					[
						{ text: 'Período:', fontSize: 12, bold: true },
						{ text: '7', fontSize: 12 },
						{ text: 'Turno', fontSize: 12, bold: true },
						{ text: 'Norturno', fontSize: 12 },
					],

				]
			},
		},
		{
			margin: [0, 15, 0, 15],
			table: {
				widths: ['*'],
				body: [
					[{ text: 'EMENTA', alignment: 'center', bold: false, fontSize: 12 }],
				]
			},

		},
		{
			table: {
				widths: ['*'],
				body: [
					[{

						text:
							`
					Computabilidade: Máquinas de Turing, Máquinas de Registradores, Funções recursivas, Outras formulações de Algoritmos, Tese de Church, Problemas insolúveis. Linguagens Formais: Lingua-gens, Gramáticas, Autômatos, Hierarquia de Chomski, Noções de Semântica de linguagens de pro-gramação. Complexidade: Complexidade Pessimista, Complexidade Media, Complexidade Míni-ma do problema, Classes de problemas: P, NP, NP-Completa.
						`, alignment: 'justify', bold: false, fontSize: 12, lineHeight: 1.5
					}],
				]
			},
		},
		{
			margin: [0, 15, 0, 15],
			table: {
				widths: ['*'],
				body: [
					[{ text: 'OBJETIVO', alignment: 'center', bold: false, fontSize: 12 }],
				]
			},

		},
		{
			table: {
				widths: ['*'],
				body: [
					[{

						text:
							`
							Proporcionar ao acadêmico a busca pelo conhecimento de noção formal de algoritmo, computabili-dade e o problema de decisão, conscientizando das limitações da ciência da computação, bem co-mo a formalização das noções de programa, máquina, computação, equivalência de programas e os estudos dos formalismos que os descrevem.
						`, alignment: 'justify', bold: false, fontSize: 12, lineHeight: 1.5
					}],
				]
			},
		}
	]

	return head;
}

export const getItemTable = (item: any) => {
	const itemTable: any[] = [
		{
			style: 'tableExample',
			table: {
				widths: [25, 60, '*', '*', 30, 30, 50, 40, 25],
				body: [
					[
						{ text: 'Item', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Cód. Produto', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Descrição', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Cód. barras', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Marca', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Qtd', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Custo Unit.', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Desconto', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Frete', fontSize: fontSize, fillColor: corHeadTable },

					],
					[
						{ text: item.item.toLowerCase(), fontSize: fontSize },
						{ text: item.produto.toLowerCase(), fontSize: fontSize },
						{ text: item.descricao.toLowerCase(), fontSize: fontSize },
						{ text: item.codbarras, fontSize: fontSize },
						{ text: item.marca.toLowerCase(), fontSize: fontSize },
						{ text: item.quantidade, fontSize: fontSize },
						{ text: item.valordoproduto, fontSize: fontSize },
						{ text: item.desconto, fontSize: fontSize },
						{ text: "1245.33", fontSize: fontSize }
					]
				]
			},
			layout: 'noBorders'
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 100, '*', '*'],
				body: [
					[
						{ text: '% st', fillColor: corHeadTable, fontSize: fontSize },
						{ text: '% mva', fillColor: corHeadTable, fontSize: fontSize },
						{ text: '% icms', fillColor: corHeadTable, fontSize: fontSize },
						{ text: '% ipi', fillColor: corHeadTable, fontSize: fontSize },

						{ text: 'Total', fillColor: corHeadTable, fontSize: fontSize }
					],
					[{ text: item.st + '%', fontSize: fontSize }, { text: item.mva + '%', fontSize: fontSize }, { text: item.icms + '%', fontSize: fontSize }, { text: item.ipi + '%', fontSize: fontSize }, { text: 12.76, fontSize: fontSize }]
				]
			},
			layout: 'noBorders',
		}
	]
	return itemTable;
}

export const getTotal = (totalS: number, totalDesconto: number, totalFrete: number, formaPagamento: number): any[] => {
	return [
		{
			text: "", margin: [0, 10],
		}
		,
		{
			style: 'tableExample',
			table: {
				widths: ['*', '*', '*', '*', '*'],
				body: [
					[
						{ text: 'Forma Pagamento', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Subtotal', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Frete', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Desconto. barras', fontSize: fontSize, fillColor: corHeadTable },
						{ text: 'Total Geral', fontSize: fontSize, fillColor: corHeadTable },
					],
					[
						{ text: "teste", fontSize: fontSize },
						{ text: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalS), fontSize: fontSize },
						{ text: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalFrete), fontSize: fontSize },
						{ text: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalDesconto), fontSize: fontSize },
						{ text: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalS + totalFrete - totalDesconto), fontSize: fontSize }
					]
				]
			},
			layout: 'lightHorizontalLines'
		}
	];
}


//	['UniAtenas', now.format('DD/MM/YYYY')],