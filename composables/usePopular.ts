import useData from './useData';

export default function usePopular() {
  return useData('games?sort-by=popularity');
}
