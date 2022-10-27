import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiGetEventoByHash } from "../api/api";
import { eventoColaboradorTDO } from "../components/tdos/eventoColaboradorTDO";
export const useEvento = () => {

	const { id } = useParams();

	const { data, error, mutate, isValidating } = useSWR(id ? id : "semid", apiGetEventoByHash, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	const loading = !data && !error;
	const evento: eventoColaboradorTDO = data?.data[0];
	return {
		loading,
		evento,
		error,
		mutate,
		isValidating
	}
}