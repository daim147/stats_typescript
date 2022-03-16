import { WinAnalysis } from './Analysis/WinAnalysis';
import { MatchDataType } from './MatchReader';
import { HtmlReport } from './Reports/HtmlReport';

export interface Analyzer {
  run(matches: MatchDataType[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnalysisHtml(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndReport(matches: MatchDataType[]) {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
