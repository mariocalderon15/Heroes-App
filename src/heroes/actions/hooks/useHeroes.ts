import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../get-heroes-by-page.actions";



export const useHeroes = () => {
    return useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(),
        staleTime: 5 * 60 * 1000,
        gcTime: 6 * 60 * 1000,
    })
}
