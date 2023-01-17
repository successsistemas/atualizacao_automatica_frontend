import { useContext } from "react";
import { EvemtoItemCliente } from "../components/EvemtoItemCliente";
import { eventoColaboradorTDO } from "../components/tdos/eventoColaboradorTDO";
import { EventosClienteContext } from "../context/EventosClienteContext";

export const ListaEventosCliente = () => {


	const { data } = useContext(EventosClienteContext);
	return (
		<>
			{data?.map((item: eventoColaboradorTDO) => {
				return <EvemtoItemCliente key={item?.id} children={item} />
			})}
		</>
	);
}