export default function useData(endpoint: string) {
  const config = useRuntimeConfig();
  const { data } = useFetch(`${config.public.baseURL}/${endpoint}`, {
    headers: {
      'X-RapidAPI-Key': config.public.RapidAPIKey,
      'X-RapidAPI-Host': config.public.RapidAPIHost,
    },
  });

  return { data };
}
