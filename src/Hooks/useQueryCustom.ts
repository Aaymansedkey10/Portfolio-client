"use client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useQueryCustom = <T>(
  key: string[],
  fetchFn: () => Promise<T | null>,
  fallbackData?: T | null,
  options?: Partial<UseQueryOptions<T | null>>,
) => {
  const query = useQuery<T | null>({
    queryKey: key,
    queryFn: fetchFn,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 25,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,

    retry: 1,

    ...options,
  });
  const hasData = query.data && (!Array.isArray(query.data) || query.data.length > 0);

  const finalData = hasData ? query.data : query.isLoading ? undefined : fallbackData;

  return {
    ...query,
    data: finalData as T | null,
  };
};
