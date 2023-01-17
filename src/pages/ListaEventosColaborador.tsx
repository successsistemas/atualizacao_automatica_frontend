import { useContext } from "react";
import { EvemtoItem } from "../components/EvemtoItem";
import { eventoColaboradorTDO } from "../components/tdos/eventoColaboradorTDO";
import { EventosContext } from "../context/EventosContext";

export const ListaEventosColaborador = () => {


	const { data } = useContext(EventosContext);

	return (
		<>
			{data?.map((item: eventoColaboradorTDO) => {
				return <EvemtoItem key={item?.id} children={item} />
			})}
		</>
	);
}