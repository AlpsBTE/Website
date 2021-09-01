import { Language } from '../types/language';

export const fetchTestdata = async (language: Language): Promise<any> => {
  return (await import(`../testdata/${language}.json`)).default;
};

export default fetchTestdata;
