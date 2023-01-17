import { useRecoilState } from "recoil";
import useSWR from "swr";
import { apiGetAllEventos, apiGetEventos } from "../api/api";
import { textState } from "../atom/paramSearchState";

export const useClienteEvents = () => {

	const [text,] = useRecoilState(textState);


	const { data, error, mutate, isValidating } = useSWR(text ? text : "all", apiGetAllEventos, {
		revalidateIfStale: true,
		revalidateOnFocus: true,
		revalidateOnReconnect: true
	});
	const loading = !data && !error;

	return {
		loading,
		...data,
		error,
		mutate,
		isValidating
	}
}