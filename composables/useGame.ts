import useData from './useData';

export default function useGame(id: string) {
  return useData(`game?id=${id}`);
}
