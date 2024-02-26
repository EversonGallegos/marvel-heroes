export type ChangePage = { 
  type: 'increment' | 'decrement' | number,
  maxPages: number
};