import useSWR from "swr";
import { getSingleVersion, getUsuarios } from "../api/api";
export const useDetalheVersao = (id:string) => {

	const { data, error, mutate, isValidating } = useSWR(id, getSingleVersion, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	const loading = !data && !error;

	return {
		loading,
		dados:data,
		error,
		mutate,
		isValidating
	}
}