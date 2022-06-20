import {Apollo, gql} from "apollo-angular";

import {MatchModel} from "../../model/match/match.model";

export class MatchFunctions {

  constructor(private apollo: Apollo) { }

  createMatch(match: MatchModel) {
    console.log("test")
    this.apollo
      .mutate({
        mutation: gql`
        mutation CreateNewMatch($matchId: String, $date: Date, $totalAmount: Int, $matchType: String, $isSet: Boolean){
          createNewMatch(matchId:$matchId, date:$date, totalAmount: $totalAmount, matchType: $matchType, isSet: $isSet){
            matchId
          }
        }
      `,
        variables: {
          matchId: match.matchId,
          date: match.date,
          totalAmount: match.totalAmount,
          matchType: match.matchType,
          isSet: match.isSet,
        },
      })
      .subscribe();
  }

}
