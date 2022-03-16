//! Use enum when to signal a developer that is a set of closely related values
//! enum should not be dynamic in properties
//! it should not contain 20+ properties just for convenient
export enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
//! if we want to return some property from enum we can use its type as function return
/* const a = (): MatchResults =>{
      return MatchResults.HomeWin
  } */
