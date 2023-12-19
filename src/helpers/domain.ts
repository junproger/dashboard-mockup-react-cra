export const domain = (fullurl: string): string => {
  if (fullurl) {
    return fullurl.replace(/^https?:\/\/w*\.?/i, '');
  }
  return 'Unknown domain';
};
