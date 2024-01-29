export default function useData(endpoint: string) {
  const config = useRuntimeConfig();
  const { data } = useFetch(`https://mmo-games.p.rapidapi.com/${endpoint}`, {
    headers: {
      'X-RapidAPI-Key': '8c225fdb62mshce8bc529a49bbadp1d87c7jsn82460f41d425',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
    },
  });

  return { data };
}
