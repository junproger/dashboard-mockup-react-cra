import { Site } from '../types/ApiTypes';

export const domain = (datasites: Site[], siteid: number): string => {
  const fullurl = datasites.find((site) => site.id === siteid)?.url as string;
  return fullurl.replace(/^https?:\/\/w*\.?/i, '');
};
