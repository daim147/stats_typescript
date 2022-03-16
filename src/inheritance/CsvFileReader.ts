import fs from 'fs';
//! Install type definition file to work with correctly in typescript to know typescript about definition of every method function classes used in library

export abstract class CsvFileReader<Type> {
  data: Type[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): Type;

  read(): void {
    this.data = fs
      .readFileSync(`${this.filename}.csv`, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
