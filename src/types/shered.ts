export type SimpleDict = {
  [name: string]: string | boolean | null | number,
};

export type Dict = {
  [name: string]: string | boolean | null | number | Dict | Dict[],
};
