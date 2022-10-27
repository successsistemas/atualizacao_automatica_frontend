import useSWR from "swr";
import { apiGetEventos } from "../api/api";
export const useEvents = () => {

	const { data, error, mutate, isValidating } = useSWR('all', apiGetEventos, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});
	const loading = !data && !error;
	function a(){}

	return {
		loading,
		...data,
		error,
		mutate,
		isValidating
	}
}