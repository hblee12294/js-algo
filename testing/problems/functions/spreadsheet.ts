type CellValue = string | number | null;

type Cell = {
  id: string;
  value: CellValue;
  row: number;
  column: string;
};

export class Spreadsheet {
  private cells: Map<string, Cell> = new Map();

  constructor() {}

  public set(column: string, row: number, value: CellValue) {
    const id = column + row;

    this.cells.set(id, {
      id,
      value,
      row,
      column,
    });
  }

  public get(column: string, row: number) {
    const id = column + row;

    return this.cells.get(id)?.value ?? null;
  }
}
