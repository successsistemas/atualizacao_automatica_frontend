import useSWR from "swr";
import { getUsuarios } from "../api/api";
export const useTesteUsuarios = () => {

	const { data, error, mutate, isValidating } = useSWR( getUsuarios, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});
	console.log(data)

	const loading = !data && !error;

	return {
		loading,
		data,
		error,
		mutate,
		isValidating
	}
}