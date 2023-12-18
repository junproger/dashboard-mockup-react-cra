/* eslint-disable no-console */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logging = (...arg: any): void => {
  console.log('Stamp: ', Date.now(), 'Data: ', ...arg);
};
