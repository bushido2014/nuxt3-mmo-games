import useData from './useData';

export default function useplBrowser() {
  return useData('games?platform=browser');
}
