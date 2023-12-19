import { Test } from '../types/ApiTypes';

export const search = (datatests: Test[], value: string): Test[] | [] => {
  return datatests.filter((test) => test.name.toLowerCase().includes(value.toLowerCase()));
};
