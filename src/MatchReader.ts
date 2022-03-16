import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResult';
import { stringDateToDate } from './utils';

interface DataReader {
  read(): void;
  data: string[][];
}
export type MatchDataType = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];

export class MatchReader {
  matches: MatchDataType[] = [];
  static csv(filename: string): MatchReader {
    const reader = new MatchReader(new CsvFileReader(filename));
    reader.load();
    return reader;
  }
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchDataType => [
        stringDateToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResults,
        row[6],
      ]
    );
  }
}
