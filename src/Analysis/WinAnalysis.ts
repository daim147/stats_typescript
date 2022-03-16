import { MatchDataType } from '../MatchReader';
import { MatchResults } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchDataType[]): string {
    let wins = 0;

    matches.forEach((match: MatchDataType): void => {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        wins++;
      }
    });
    return `Team ${this.team} won ${wins} matches`;
  }
}
