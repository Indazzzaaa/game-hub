import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    // initialData: any_static_Data  // this data will be loaded before any api calls are made
  });
export default useGenres;
