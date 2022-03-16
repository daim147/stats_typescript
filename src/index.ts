import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//! With static methods on class
const matchReader = MatchReader.csv('football');
const summary = Summary.winAnalysisHtml('Liverpool');
summary.buildAndReport(matchReader.matches);

// const reader = new MatchReader(new CsvFileReader('football'));
// reader.load();
// const summary = new Summary(new WinAnalysis('Liverpool'), new HtmlReport());
