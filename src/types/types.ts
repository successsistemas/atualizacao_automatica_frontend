export type PdeModel = {
    uniqidGenerated: string,
    nome: string,
    descricao: string,
    uidId: string
}
export type FichaCadastral = {
    ano: string;
    cargaHoraria: string;
    creditos: string;
    curso: string;
    eixoProfissional: string;
    idPde: string;
    nucleoFormativo: string;
    periodo: string;
    professor: string;
    semestre: string;
    uidId: string;
}
export type EmentaObjetivoDado = {
    ementa: string;
    objetivo: string;
    idEmenta: string;
    pdeId: string;
    uidId: string;
}
export type BibliografiasDados = {
    bibliografiaBasica: string;
    bibliografiaComplementar: string;
    pdeId: string;
    uidId: string;
    idBibliografia: string;
}
export type PlanejamentoAtividadesDados = {
    ciclo: string;
    pontos: string;
    tituloNucleoFormativo: string;
    uidId: string;
    uidPlanejamentoAtividades: string;
    value: string;
    pdeId: string;
}