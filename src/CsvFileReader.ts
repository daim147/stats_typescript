import fs from 'fs';
//! Install type definition file to work with correctly in typescript to know typescript about definition of every method function classes used in library

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(`${this.filename}.csv`, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
