import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { VersoesPage } from "../pages/VersoesPage";
import { DetalheEventoPage } from "../pages/DetalheEventoPage";
import { Home } from "../pages/Home";
import { LayoutCliente } from "../pages/LayoutCliente";
import { ListagemEventosClientePage } from "../pages/ListagemEventosClientePage";
import { ListagemEventosColaboradorPage } from "../pages/ListagemEventosColaboradorPage";
import { TestePage } from "../pages/TestePage";
import { TesteLayout } from "../pages/TestLayout";
import { LayoutPadrao } from "../pages/LayoutDefault";
import { ParametrosPage } from "../pages/ParametrosPage";
import { DetalheVersaoPage } from "../pages/DetalheVersaoPage";
import { DetalheErroLogPage } from "../pages/DetalheErroLogPage";
import { ControleProcessoContratoPage } from "../pages/ControleProcessoContratoPage";
import { ControleProcessoContratoDetalhesPage } from "../pages/ControleProcessoContratoDetalhesPage";
import { GerenciamentoAtualizacaoClientePage } from "../pages/GerenciamentoAtualizacaoClientePage";
import { TesteComponente } from "../pages/TesteComponente";
import { PrincipalPage } from "../pages/PrincipalPage";
import { ListagemErroLogPage } from "../pages/ListagemErrosLogPage";
import { ListagemPendenciaConciliacaoPage } from "../pages/ListagemPendenciaConciliacaoPage";
import { PendenciaConciliacao } from "../components/estatistica/PendenciaConciliacao";
import { LIstaRejeicoesFiscaisPage } from "../pages/LIstaRejeicoesFiscaisPage";
import { ConfiguracaoConexao } from "../components/ConfiguracaoConexao";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="teste" element={<TesteComponente />} />
      <Route path="configuracao-conexao" element={<ConfiguracaoConexao/>}/>
      <Route path="home" element={<Home />} />

      <Route path="eventos/" element={<LayoutCliente />}>
        <Route index element={<ListagemEventosClientePage />} />
        <Route path={":id"} element={<DetalheEventoPage />} />
      </Route>
      <Route path="painel" element={<LayoutPadrao />}>
        <Route path="colaborador">

          <Route path="home" >
            <Route index element={<ListagemEventosColaboradorPage />} />
            <Route path={":id"} element={<DetalheErroLogPage />} />
          </Route>
          <Route path="erro-logs" >
            <Route index element={<ListagemErroLogPage />} />
            <Route path={":id"} element={<DetalheErroLogPage />} />
          </Route>
          <Route path="pendencia-conciliacao" >
            <Route index element={<ListagemPendenciaConciliacaoPage />} />
            <Route path={":id"} element={<PendenciaConciliacao />} />
          </Route>
          <Route path="rejeicoes-fiscais" >
            <Route index element={<LIstaRejeicoesFiscaisPage />} />
            <Route path={":id"} element={<PendenciaConciliacao />} />
          </Route>
          
          <Route path="detalhes-erro">
            <Route index element={<VersoesPage />} />
            <Route path={":id"} element={<DetalheErroLogPage />} />
          </Route>

          <Route path="versoes">
            <Route index element={<VersoesPage />} />
            <Route path={":id"} element={<DetalheVersaoPage />} />
          </Route>

          <Route path="controle-processo-contrato">
            <Route index element={<ControleProcessoContratoPage />} />
            <Route path={":id"} element={<ControleProcessoContratoDetalhesPage />} />
          </Route>

          <Route path="gerenciamento-atualizacao-clientes">
            <Route index element={<GerenciamentoAtualizacaoClientePage />} />
            {/* <Route path={":id"} element={<ControleProcessoContratoDetalhesPage />} /> */}
          </Route>
          <Route path="principal">
            <Route index element={<PrincipalPage />} />
           
          </Route>
          <Route path="detalhe" element={<DetalheVersaoPage />} />
          <Route path="parametros" element={<ParametrosPage />} />
          <Route path="detalhe-erro" element={<DetalheErroLogPage />} />
          {/* <Route path="lucas" element={<Teste />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

