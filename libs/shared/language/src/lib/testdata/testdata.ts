import { ISet } from '../interfaces/set';
import { Language } from '../types/language';

export const fetchTestdata = async (language: Language): Promise<ISet> => {
  return <ISet>(await import(`./${language}.json`)).default;
};

export default fetchTestdata;
('');
